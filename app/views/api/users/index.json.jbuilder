# users = @user.includes(:event)
# puts @events
# debugger
events = @events.includes(:user)
mutualsCounter = {}
today = (Time.now).inspect


events.each do |event|
    rsvps = event.rsvps.includes(:user)

    rsvps.each do |rsvp|
        if ((rsvp.user.id === @current_user.id) && (rsvp.status != "Can't Go" )) && event.date_time && (event.date_time < today)
            rsvps.each do |rsvp|
                if rsvp.user_id != @current_user.id && rsvp.status != "Can't Go" 
                    if mutualsCounter[rsvp.user_id]
                        mutualsCounter[rsvp.user_id][:events].push(event.id)
                        mutualsCounter[rsvp.user_id][:event] = event.date_time
                    elsif 
                        mutualsCounter[rsvp.user_id] = { name: rsvp.user.name, events: [event.id], event: event.date_time}
                    end
                    # mutualsCounter[rsvp.user_id] ? (mutualsCounter[rsvp.user_id][:events] += 1 && mutualsCounter[rsvp.user_id][:event] = event.date_time) : (mutualsCounter[rsvp.user_id] = { name: rsvp.user.name, events: 1, event: event.date_time})
                end
            end
            break;
        end
    end

end

# json.users do 
    mutualsCounter.each do |user_id, mutual|
        json.set! user_id do
            json.id user_id
            json.name mutual[:name]
            json.recentEvent mutual[:event]
            json.sharedEvents mutual[:events]
            # json.test 'test'
        end
    end
# end