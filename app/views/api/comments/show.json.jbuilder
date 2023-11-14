
json.extract! @comment, :id, :author_id, :body, :comment_type
json.date @comment.created_at
json.user @comment.user.name