class UpdateCommentTableChangeTypeColName < ActiveRecord::Migration[7.0]
  def change
    rename_column :comments, :type, :comment_type
  end
end
