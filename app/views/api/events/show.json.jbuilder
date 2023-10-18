
json.extract! @event, :id, :title, :description, :location, :capacity, :cost
json.dateTime @event.date_time ? @event.date_time.strftime("%A, %b %e %l%P") : @event.date_time
json.host @event.user.name

