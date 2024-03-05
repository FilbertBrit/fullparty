class Api::NotificationsController < ApplicationController
    wrap_parameters include: Notification.attribute_names + ['recieverId', 'senderId', 'eventId']
    # before_action :set_rsvp, only: [:show, :update]
  
    def index
      @notifications = Notification.where(reciever_id: params[:reciever_id])
      render :index
    end
  
    def show 
      render :show
    end
  
    def create
      # debugger
      @notification = Notification.new(notification_params)
      if @notification.save
        render :show
        # render json: rsvp_params
      else
        render json: {errors: @notification.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # def update
    #   if @rsvp.update(rsvp_params)
    #     render :show
    #   else
    #     render json: @rsvp.errors.full_messages, status: 422
    #   end
    # end
  
    private 
  
    def set_notification
      @notification = Notification.find(params[:id])
  
      rescue
        render json: ['RSVP not found'], status: :not_found
    end
  
    def notification_params
      params.require(:notification).permit(:type, :content, :reciever_id, :sender_id, :event_id)
    end
  end
  