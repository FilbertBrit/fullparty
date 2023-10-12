class RemoveColEventTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :events, :comments
  end
end
