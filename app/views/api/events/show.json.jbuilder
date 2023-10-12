json.event do
    json.extract! @event, :id, :title, :description, :location, :date_time, :capacity, :author_id, :cost, :created_at, :updated_at
end