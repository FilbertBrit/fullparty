class Notification < ApplicationRecord
    validates :type, :content, :sender_id, :reciever_id, :event_id, presence: true
    # validates :event_id, uniqueness: {scope: :user_id}

    belongs_to :user,
        foreign_key: :reciever_id,
        class_name: :User
    belongs_to :user,
        foreign_key: :sender_id,
        class_name: :User
    belongs_to :event
end