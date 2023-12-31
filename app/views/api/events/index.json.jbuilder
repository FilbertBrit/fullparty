
events = @events.includes(:user)
# upcomingEvents = []
upcomingEvents = 0
test = 0
today = (Time.now).inspect
mutualsCounter = {}

events.each do |event|

    if (event.author_id == @current_user.id || event.rsvps.includes(:user).where(users:{id: @current_user.id}).pluck(:user_id) == @current_user.id) && (!event.date_time || event.date_time < today)
        upcomingEvents += 1
    end

    rsvps = event.rsvps.includes(:user)
    # rsvp = event.rsvps.includes(:user).where('user_id' === '@current_user.id')
    # puts 'test'
    # puts event.rsvps.includes(:user).where(users:{id: @current_user.id}).pluck(:event_id) ==  @current_user.id

    rsvpUser = Rsvp.new()
    # if rsvp ##.status === "I'm Going" && event.date_time < DateTime.now
        # puts "rsvps", event.title
        
        rsvps.each do |rsvp|
            if rsvp.user.id === @current_user.id
                rsvpUser = rsvp
                
                if event.date_time && event.date_time < today
                    rsvps.each do |rsvp|
                        if rsvp.user_id != @current_user.id && rsvp.status != "Can't Go" 
                            mutualsCounter[rsvp.user_id] ?  mutualsCounter[rsvp.user_id].events.push(event.id) && mutualsCounter[rsvp.user_id].event = event.id : mutualsCounter[rsvp.user_id] = { name: rsvp.user.name, events: [event.id], event: event.id, created_at: rsvp.user.created_at}
                        end
                    end
                    # mutuals.concat( rsvps.map {|rsvp| rsvp} ) ##.user_id !== @current_user.id}
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
    mutualsCounter.each do |user_id, mutual|
        json.set! user_id do
            json.id user_id
            json.name mutual[:name]
            json.recentEvent mutual[:event]
            json.sharedEvents mutual[:events]
            json.joined mutual[:created_at].strftime("%b '%y")
        end
    end
end
json.user do 
    json.upcomingEvents upcomingEvents
end
