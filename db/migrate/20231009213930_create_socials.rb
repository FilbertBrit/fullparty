class CreateSocials < ActiveRecord::Migration[7.0]
  def change
    create_table :socials do |t|
      t.string :platform, null: false
      t.string :handle, null: false
      t.references :user, null: false, foreign_key: true
      t.index [:user_id, :platform], unique: true
      t.timestamps
    end
  end
end
