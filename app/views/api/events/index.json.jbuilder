# split up into open invite, hosting, attended, all past events
#json.set! event.id to -> "open_invite", "hosting", ...
events = @events.includes(:user)
userRsvp = nil
mutuals = []

events.each do |event|
    rsvps = event.rsvps.includes(:user)
    rsvp = event.rsvps.includes(:user).where('user.id' === '@current_user.id')
    
    if rsvp 
        rsvps.each do |rsvp|
            if rsvp.user_id === @current_user.id
                userRsvp = rsvp
            else
                mutuals << rsvp
            end
        end
    end
    
    json.set! event.id do
        json.extract! event, :title, :id, :author_id, :date_time
        json.host event.user.name
        if userRsvp 
            json.userRsvp userRsvp.status
        end
    end
end
