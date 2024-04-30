notifications = @notifications.includes(:event).includes(:user)
today = (Time.now).inspect
notifications.each do |notification|
    # debugger
    # puts today - notification.created_at
    if notification.receiver_id === @user.id


        json.set! notification.id do
            json.sender notification.user.name
            json.sender_id notification.sender_id
            json.event notification.event.title
            json.event_id notification.event_id
            json.date notification.created_at
        end
    end
end