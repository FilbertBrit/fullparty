notifications = @notifications.includes(:event)
today = (Time.now).inspect
notifications.each do |notification|
    # debugger
    # puts today - notification.created_at
    if notification.receiver_id === @user.id


        json.set! notification.id do
            json.sender notification.sender_id
            json.event notification.event.title
            json.date notification.created_at
        end
    end
end