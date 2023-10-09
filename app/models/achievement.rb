# == Schema Information
#
# Table name: achievements
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Achievement < ApplicationRecord
    validates :user_id, :title, presence: true
    belongs_to: :user
end
