# split up into open invite, hosting, attended, all past events
#json.set! event.id to -> "open_invite", "hosting", ...
events = @events.includes(:user)
# rsvpUser
mutuals = []

events.each do |event|
    rsvps = event.rsvps.includes(:user)
    rsvp = event.rsvps.includes(:user).where('user_id' === '@current_user.id')
    rsvpUser = Rsvp.new()
    if rsvp ##.status === "I'm Going" && event.date_time < DateTime.now
        # puts "rsvps", event.title
        rsvps.each do |rsvp|
            # puts rsvp.user.name, rsvp.status
            if rsvp.user.id === @current_user.id
                rsvpUser = rsvp
                # eventMutuals = event.rsvps.includes(:user).where('user_id' !== '@current_user.id')
                # mutuals << eventMutuals
                mutuals.concat( rsvps.map {|rsvp| rsvp} ) ##.user_id !== @current_user.id}
            # else
            #     mutuals << rsvp
            end
        end
    end

    json.events do
        json.set! event.id do
            json.extract! event, :title, :id, :author_id, :date_time
            json.host event.user.name
            json.userRsvp rsvpUser.status
        end
    end
end

json.users do 
    mutuals.each do |mutual|
        if mutual.status != "Can't Go" && mutual.user_id != @current_user.id
            json.set! mutual.user_id do
                json.extract! mutual, :user_id
                json.name mutual.user.name
            end
        end
    end
end
