notifications = @notifications.includes(:event)
# debugger
notifications.each do |notification|
    if notification.receiver_id === @user.id
        json.set! notification.id do
            json.sender notification.sender_id
            json.event notification.event.title
        end
    end
end