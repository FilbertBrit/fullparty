json.user do
    json.extract! @user, :id, :phone_number, :name, :created_at, :updated_at
  end
  