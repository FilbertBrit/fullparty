class RenameRecieverIdToReceiverId < ActiveRecord::Migration[7.0]
  def change
    rename_column :notifications, :reciever_id, :receiver_id
    rename_column :invites, :reciever_id, :receiver_id
  end
end
