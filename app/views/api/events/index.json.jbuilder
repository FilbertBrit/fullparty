
events = @events.includes(:user) #grabbing all events
invites = @current_user.invites.includes(:event) #grabbing all invites related to current user
# notifications = @current_user.notifications #grabbing all notifications related to current user, will need to move retrieval 

today = (Time.now).inspect
upcomingEvents = 0 #counter for upcoming events
invitedCount = 0
mutualsObj = {} #object for collecting all users who've attended the same events as the current user
invitedEvents = [] #collect the ids of all events the current user is invted to

#adding invites to payload
json.invites do 
    invites.each do |invite|
        invitedEvents.push(invite.event_id)
        json.set! invite.id do
            json.extract! invite, :id, :sender_id, :receiver_id, :event_id
        end
    end
end

# json.notifications do 
#     notifications.each do |notification|
#         json.set! notification.id do
#             json.extract! notification, :id, :content, :sender_id, :receiver_id, :event_id
#         end
#     end
# end

events.each do |event|

    #checking if current user is invited to this event
    invited = invitedEvents.include?(event.id) ? 'invited' : nil
    
    #grabbing all rsvps of this event
    rsvps = event.rsvps.includes(:user)

    rsvpUser = Rsvp.new()
        
    #iterating through all rsvp to find current user's rsvp + all rsvped users' info
    rsvps.each do |rsvp|
        if rsvp.user.id === @current_user.id
            rsvpUser = rsvp
            
            if event.date_time && event.date_time < today
                rsvps.each do |rsvp|
                    if rsvp.user_id != @current_user.id && rsvp.status != "Can't Go" 
                        mutualsObj[rsvp.user_id] ?  mutualsObj[rsvp.user_id][:events].push(event.id) && mutualsObj[rsvp.user_id][:event] = event.id : mutualsObj[rsvp.user_id] = { name: rsvp.user.name, events: [event.id], event: event.id, created_at: rsvp.user.created_at}
                    end
                end
            end
        end
    end
    if invited && (rsvpUser.status == nil)
        invitedCount += 1
    end

    #check whether event is upcoming -> increment counter
    if rsvpUser.status || event.author_id == @current_user.id || invited
        if !event.date_time || event.date_time > today
            upcomingEvents += 1
        end
    end

    #adding events to payload
    json.events do
        json.set! event.id do
            json.extract! event, :title, :id, :author_id, :date_time
            json.openInvite  event.open_invite || false
            json.host event.user.name
            json.userRsvp [rsvpUser.status || invited, rsvpUser.id]
        end
    end
end

#adding users(mutuals) to payload
json.users do 
    mutualsObj.each do |user_id, mutual|
        json.set! user_id do
            json.id user_id
            json.name mutual[:name]
            json.recentEvent mutual[:event]
            json.sharedEvents mutual[:events]
            json.joined mutual[:created_at].strftime("%b '%y")
        end
    end
end

#adding user(sessionUser) payload
json.user do 
    json.upcomingEvents upcomingEvents
    json.invitedEvents invitedCount
end

