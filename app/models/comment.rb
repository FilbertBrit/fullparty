# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  body         :string           not null
#  author_id    :bigint           not null
#  event_id     :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  comment_type :string           not null
#
class Comment < ApplicationRecord
    validates :body, :author_id, :event_id, :comment_type, presence: true
    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User
    belongs_to :event
end
