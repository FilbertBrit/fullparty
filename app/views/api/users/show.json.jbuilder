# notifications = @user.notifications.includes(:event)
# puts notifications 

# notifications.each do ||

# json.user do
    json.extract! @user, :id, :phone_number, :name, :bio
    json.joined @user.created_at.strftime("%b '%y")
# end


# json.notifications do 
#     notifications.each do |notification|
#         if notification.receiver_id === @user.id
#             json.set! notification.id do
#                 json.sender notification.sender_id
#                 json.event notification.event.title
#             end
#         end
#     end
# end
  