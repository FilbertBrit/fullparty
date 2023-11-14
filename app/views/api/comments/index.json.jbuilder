# debugger
# require 'date'
comments = @comments.includes(:user)
# date = DateTime.now

comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :body, :event_id, :author_id, :comment_type
        json.date comment.created_at
        json.author comment.user.name
    end
end