class AddCostColEventTable < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :cost, :integer
  end
end
