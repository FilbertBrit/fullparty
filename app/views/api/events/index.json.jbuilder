# split up into open invite, hosting, attended, all past events
#json.set! event.id to -> "open_invite", "hosting", ...
events = @events.includes(:user)
userRsvp = nil;

events.each do |event|
    rsvps = event.rsvps.includes(:user)
    rsvps.each do |rsvp|
        if rsvp.user_id === @current_user.id
            userRsvp = rsvp
        end
    end
    
    json.set! event.id do
        json.extract! event, :title, :id, :author_id
        json.host event.user.name
        json.userRsvp userRsvp.status
    end
end