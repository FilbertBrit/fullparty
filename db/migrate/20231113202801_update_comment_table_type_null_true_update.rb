class UpdateCommentTableTypeNullTrueUpdate < ActiveRecord::Migration[7.0]
  def change
    change_column :comments, :type, :string, :null => false
  end
end
