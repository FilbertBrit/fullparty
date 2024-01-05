@rsvps.each do |rsvp|
    json.set! rsvp.id do
      json.extract! rsvp, :id, :user_id, :status
      json.user rsvp.user.name
      # json.event rsvp.event.title
    end
  end