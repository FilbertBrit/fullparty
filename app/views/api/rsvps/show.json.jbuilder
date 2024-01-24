

json.extract!  @rsvp, :id, :user_id, :status, :event_id
json.user @rsvp.user.name
