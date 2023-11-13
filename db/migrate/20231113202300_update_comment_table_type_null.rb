class UpdateCommentTableTypeNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null :comments, :type, :false
  end
end
