class AddOpenInviteToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :open_invite, :boolean
  end
end
