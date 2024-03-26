class Invite < ApplicationRecord
    validates :sender_id, :receiver_id, :event_id, presence: true
    validates :event_id, uniqueness: {scope: [:sender_id, :receiver_id]}

    belongs_to :user,
        foreign_key: :receiver_id,
        class_name: :User
        # dependent: :destroy
    # belongs_to :user,
    #     foreign_key: :sender_id,
    #     class_name: :User
    belongs_to :event
end