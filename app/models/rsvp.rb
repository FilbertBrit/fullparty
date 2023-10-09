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
    belongs_to :user
    belongs_to :event
end
