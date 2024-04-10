class CreateRsvps < ActiveRecord::Migration[7.0]
  def change
    create_table :rsvps do |t|
      t.string :status, null: false
      t.references :user, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true
      t.index [:user_id, :event_id], unique: true
      t.timestamps
    end
    # add_index :rsvps, [:user_id, :event_id], unique: true
  end
end
