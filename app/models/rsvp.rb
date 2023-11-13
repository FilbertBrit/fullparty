# == Schema Information
#
# Table name: rsvps
#
#  id         :bigint           not null, primary key
#  status     :string           not null
#  user_id    :bigint           not null
#  event_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Rsvp < ApplicationRecord
    validates :status, :user_id, :event_id, presence: true
    validates :event_id, uniqueness: {scope: :user_id}

    belongs_to :user
    belongs_to :event
end
