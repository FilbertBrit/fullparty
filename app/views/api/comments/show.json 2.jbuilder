
json.extract! @comment, :id, :body, :author_id, :comment_type, :event_id
json.date @comment.created_at
json.author @comment.user.name