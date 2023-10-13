# split up into open invite, hosting, attended, all past events
#json.set! event.id to -> "open_invite", "hosting", ...

@events.each do |event|
    json.set! event.id do
        # json.partial! 'event', event: @event 
        json.extract! event, :title, :id, :author_id
    end
end