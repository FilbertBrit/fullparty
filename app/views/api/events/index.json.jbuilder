# split up into open invite, hosting, attended, all past events
#json.set! event.id to -> "open_invite", "hosting", ...
events = @events.includes(:user)

events.each do |event|
    rsvps = event.rsvps.includes(:user)
    rsvpArr = []
    rsvps.each do |rsvp|
        rsvpArr.push(rsvp.id)
    end
    json.set! event.id do
        json.extract! event, :title, :id, :author_id
        json.host event.user.name
        json.rsvpList rsvpArr
    end
end