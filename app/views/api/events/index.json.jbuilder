
events = @events.includes(:user)
upcomingEvents = 0
test = 0
today = (Time.now).inspect
mutualsCounter = {}
invites = @current_user.invites.includes(:event)
notifications = @current_user.notifications
puts 'notifications:', notifications
invitedEvents = []
invited = nil

json.invites do 
    invites.each do |invite|
        invitedEvents.push(invite.event_id)
        json.set! invite.id do
            json.extract! invite, :id, :sender_id, :receiver_id, :event_id
        end
    end
end
json.notifications do 
    notifications.each do |notification|
        json.set! notification.id do
            json.extract! notification, :id, :content, :sender_id, :receiver_id, :event_id
        end
    end
end

events.each do |event|
    invited = nil
    if invitedEvents.include?(event.id)
    invited = 'invited'
    end

    # if (event.author_id == @current_user.id || event.rsvps.includes(:user).where(users:{id: @current_user.id}).pluck(:user_id) == @current_user.id) && (!event.date_time || event.date_time < today)
    #     puts event.title
    #     upcomingEvents += 1
    # end

    rsvps = event.rsvps.includes(:user)

    rsvpUser = Rsvp.new()
        
        rsvps.each do |rsvp|
            if rsvp.user.id === @current_user.id
                rsvpUser = rsvp
                
                if event.date_time && event.date_time < today
                    rsvps.each do |rsvp|
                        if rsvp.user_id != @current_user.id && rsvp.status != "Can't Go" 
                            mutualsCounter[rsvp.user_id] ?  mutualsCounter[rsvp.user_id][:events].push(event.id) && mutualsCounter[rsvp.user_id][:event] = event.id : mutualsCounter[rsvp.user_id] = { name: rsvp.user.name, events: [event.id], event: event.id, created_at: rsvp.user.created_at}
                        end
                    end
                end
            end
        end

        if rsvpUser.status || event.author_id == @current_user.id || invitedEvents.include?(event.id)
            if event.date_time 

                if event.date_time > today
                    upcomingEvents += 1
                end

            else
                upcomingEvents += 1
            end

        end
    # end

    json.events do
        json.set! event.id do
            json.extract! event, :title, :id, :author_id, :date_time
            json.host event.user.name
            json.userRsvp rsvpUser.status || invited
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

