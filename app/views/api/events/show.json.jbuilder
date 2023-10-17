
json.extract! @event, :id, :title, :description, :location, :date_time, :capacity, :cost
json.host @event.user.name

