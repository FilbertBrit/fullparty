
# debugger
rsvps = @event.rsvps.includes(:user) || []
comments = @event.comments.includes(:user)
userRsvp = nil;

# rsvpArr = []
# available = @event.capacity || 0;

rsvps.each do |rsvp|
#     # rsvpArr.push(rsvp.id)
#     # if rsvp.status === "going" || rsvp.status === "I'm Going"
#     #     rsvpsGoing += 1
#     #     available -= 1
#     # end
#     # if rsvp.status === "Maybe" || rsvp.status === "maybe"
#     #     rsvpsMaybye += 1
#     # end
    if rsvp.user_id === @current_user.id
        userRsvp = rsvp.id
    end
end

json.event do 
    json.extract! @event, :id, :title, :description, :location, :capacity, :cost
    json.dateTime @event.date_time
    json.date @event.date_time ? @event.date_time.strftime("%A, %b %e ") : @event.date_time
    json.host @event.user.name
    json.hostId @event.user.id
    json.userRsvp userRsvp
end


json.rsvps do
    rsvps.each do |rsvp|
        json.set! rsvp.id do
            json.extract! rsvp, :id, :user_id, :status, :event_id
            json.user rsvp.user.name
        end
    end
end

json.comments do
    comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :author_id, :comment_type, :event_id
            json.date comment.created_at
            json.author comment.user.name
        end
    end
end
