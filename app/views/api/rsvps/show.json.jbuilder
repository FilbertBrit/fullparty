
# json.rsvps do
    # json.set! @rsvp.id do
        json.extract!  @rsvp, :id, :user_id, :status, :event_id
        json.user @rsvp.user.name
    # end
# end

# json.events do
#     # json.set! @rsvp.event_id do
#         json.userRsvp @rsvp.id  
#     # end
# end