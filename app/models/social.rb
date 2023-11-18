# == Schema Information
#
# Table name: socials
#
#  id         :bigint           not null, primary key
#  platform   :string           not null
#  handle     :string           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Social < ApplicationRecord
    validates :platform, :handle, :user_id, presence: true
    validates :platform, uniqueness: {scope: :user_id}

    belongs_to :user
end
