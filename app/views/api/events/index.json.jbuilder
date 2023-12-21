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
    # puts mutuals
    json.set! event.id do
        json.extract! event, :title, :id, :author_id, :date_time
        json.host event.user.name
        if userRsvp 
            json.userRsvp userRsvp.status
        end
    end
end

json.users do 
    mutuals.each do |mutual|
        # puts mutual.user_id
        # puts mutual.user.name
        json.set! mutual.user_id do
            json.extract! mutual, :user_id
            json.name mutual.user.name
        end
    end
end
