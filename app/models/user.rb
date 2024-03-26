# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  phone_number    :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  bio             :string
#
class User < ApplicationRecord
  before_validation :ensure_session_token
  has_secure_password

  validates :name, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }

  validates :phone_number, 
    uniqueness: true, 
    length: { minimum: 10 }

  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true
    
  has_many :events,
    foreign_key: :author_id,
    class_name: :Event,
    dependent: :destroy

  has_many :rsvps,
  dependent: :destroy

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment,
    dependent: :destroy

  has_many :socials,
  dependent: :destroy

  has_many :achievements,
  dependent: :destroy

  has_many :parties,
    through: :rsvps,
    source: :event

  # has_many :invites,
  # foreign_key: :sender_id,
  # class_name: :Invite,
  # dependent: :destroy

  has_many :invites,
  foreign_key: :receiver_id,
  class_name: :Invite,
  dependent: :destroy

  # has_many :notifications,
  # foreign_key: :sender_id,
  # class_name: :Notification,
  # dependent: :destroy

  # has_many :notifications,
  # foreign_key: :receiver_id,
  # class_name: :Notification,
  # dependent: :destroy

    
  def reset_session_token!
    # `update!` the user's session token to a new, random token
    # return the new session token, for convenience
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(phone_number, password)
    # determine the field you need to query: 
    #   * `email` if `credential` matches `URI::MailTo::EMAIL_REGEXP`
    #   * `username` if not
    # find the user whose email/username is equal to `credential`
  
    # if no such user exists, return a falsey value
  
    # if a matching user exists, use `authenticate` to check the provided password
    # return the user if the password is correct, otherwise return a falsey value
    # debugger

    user = User.find_by(phone_number: phone_number)
      # if user&.authenticate(password) # equivalent to below
      if user && user.authenticate(password) # equivalent to is_password?
        user 
      else
        nil
      end
  end

  private
  def generate_unique_session_token
    # in a loop:
      # use SecureRandom.base64 to generate a random token
      # use `User.exists?` to check if this `session_token` is already in use
      # if already in use, continue the loop, generating a new token
      # if not in use, return the token
      while true
        token = SecureRandom.urlsafe_base64
        return token unless User.exists?(session_token: token)
      end
  end

  def ensure_session_token
    # if `self.session_token` is already present, leave it be
    # if `self.session_token` is nil, set it to `generate_unique_session_token`
    self.session_token ||= generate_unique_session_token
  end

end
