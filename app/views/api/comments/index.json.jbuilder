
comments = @comments.includes(:user)

comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :body, :event_id, :author_id, :type
        json.author comment.user.name
    end
end