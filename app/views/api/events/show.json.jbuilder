

rsvps = @event.rsvps.includes(:user)

rsvpArr = []
rsvps.each do |rsvp|
    rsvpArr.push(rsvp.id)
end

json.event do 
    json.extract! @event, :id, :title, :description, :location, :capacity, :cost
    json.dateTime @event.date_time ? @event.date_time.strftime("%A, %b %e %l%P") : @event.date_time
    json.host @event.user.name
    json.rsvpList rsvpArr
end


json.rsvps do
    rsvps.each do |rsvp|
        json.set! rsvp.id do
        json.extract! rsvp, :id, :user_id, :status
        json.user rsvp.user.name
        end
    end
end
