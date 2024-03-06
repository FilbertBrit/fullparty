class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.string :type, null: false
      t.string :content, null: false

      t.references :reciever, null: false, foreign_key: {to_table: :users}
      t.references :sender, null: false, foreign_key: {to_table: :users}
      t.references :event, null: false, foreign_key: {to_table: :events}

      t.timestamps
    end
  end
end