class UpdateCommentTableTypeNullTrue < ActiveRecord::Migration[7.0]
  def change
    change_column_null :comments, :type, :true
  end
end
