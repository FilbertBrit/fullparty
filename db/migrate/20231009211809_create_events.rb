class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :description
      t.string :location
      t.datetime :date_time
      t.integer :capacity
      t.integer :comments
      t.references :author, null: false, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
