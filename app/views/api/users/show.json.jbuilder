notifications = @user.notifications.includes(:event)

json.user do
    json.extract! @user, :id, :phone_number, :name, :bio
    json.joined @user.created_at.strftime("%b '%y")
end


# json.notifications do 
#     notifications.each |notification|
        
#     end
# end
  