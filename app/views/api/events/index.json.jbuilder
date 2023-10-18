# split up into open invite, hosting, attended, all past events
#json.set! event.id to -> "open_invite", "hosting", ...
events = @events.includes(:user)

events.each do |event|
    json.set! event.id do
        json.extract! event, :title, :id, :author_id
        json.host event.user.name
    end
end