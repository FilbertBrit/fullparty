json.user do
    json.extract! @user, :id, :phone_number, :username, :created_at, :updated_at
  end
  