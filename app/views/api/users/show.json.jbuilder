events = @events.includes(:user)
today = (Time.now).inspect
sharedEvents = []

if @user.id != @current_user.id

    events.each do |event|

        userRsvp 
        currentUserRsvp
        rsvps = event.rsvps.includes(:user)

        rsvps.each do |rsvp|
            
            if rsvp.user.id === @current_user.id && rsvp.status != "Can't Go"
                currentUserRsvp = rsvp
            elsif rsvp.user.id === @user.id && rsvp.status != "Can't Go"
                userRsvp = rsvp
            end

            if userRsvp && currentUserRsvp
                json.events do
                    json.set! event.id do
                        json.extract! event, :title, :id, :date_time
                    end
                end
                
                sharedEvents.push(event)
                break
            end

        end

    end

end

json.user do
    json.extract! @user, :id, :phone_number, :name, :bio
    json.joined @user.created_at.strftime("%b '%y")
end

  