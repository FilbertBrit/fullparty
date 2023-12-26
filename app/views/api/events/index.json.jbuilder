# split up into open invite, hosting, attended, all past events
#json.set! event.id to -> "open_invite", "hosting", ...
events = @events.includes(:user)
today = (Time.now).inspect
mutuals = []
mutualsCounter = {}

events.each do |event|
    # puts event.date_time, 'event date'
    # if event.date_time 
    #     puts (event.date_time < today), 'compare'
    # end
    rsvps = event.rsvps.includes(:user)
    # rsvp = event.rsvps.includes(:user).where('user_id' === '@current_user.id')
    rsvpUser = Rsvp.new()
    # if rsvp ##.status === "I'm Going" && event.date_time < DateTime.now
        # puts "rsvps", event.title
        
        rsvps.each do |rsvp|
            # puts rsvp.user.name, rsvp.status
            if rsvp.user.id === @current_user.id
                rsvpUser = rsvp
                
                if event.date_time && event.date_time < today
                    rsvps.each do |rsvp|
                        if rsvp.user_id != @current_user.id && rsvp.status != "Can't Go" 
                            mutualsCounter[rsvp.user_id] ?  mutualsCounter[rsvp.user_id].events += 1 : mutualsCounter[rsvp.user_id] = { name: rsvp.user.name, events: 1}
                        end
                    end
                    mutuals.concat( rsvps.map {|rsvp| rsvp} ) ##.user_id !== @current_user.id}
                end
            end
        end
    # end

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
        # if mutual.status != "Can't Go" && mutual.user_id != @current_user.id
        #     json.set! mutual.user_id do
        #         json.extract! mutual, :user_id
        #         json.name mutual.user.name
        #         json.recentEvent 0
        #         json.sharedEvents 0
        #     end
        # end
    end
    mutualsCounter.each do |user_id, mutual|
        json.set! user_id do
            json.user_id user_id
            json.name mutual[:name]
            json.recentEvent 0
            json.sharedEvents mutual[:events]
        end
    end
end
