# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  location    :string
#  date_time   :datetime
#  capacity    :integer
#  author_id   :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  cost        :integer
#

class Event < ApplicationRecord
    validates :title, :author_id, presence: true
    
    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User
    has_many :comments, dependent: :destroy
    has_many :rsvps, dependent: :destroy

    has_one_attached :photot
end
