class Api::InvitesController < ApplicationController
    wrap_parameters include: Invite.attribute_names + ['senderId', 'recieverId', 'eventId']
    # before_action :set_rsvp, only: [:show, :update]
  
    def index
      # @invites = Invite.where(reciever_id: params[:reciever_id])
      # render :index
    end
  
    # def show 
    #   render :show
    # end
  
    def create
      # debugger
      @invite = Invite.new(invite_params)
      if @invite.save
        render json: {invite: @invite}
        # render :show
        # render json: rsvp_params
      else
        render json: {errors: @rsvp.errors.full_messages }, status: :unprocessable_entity
      end
      # render json: rsvp_params
    end
  
    # def update
    #   if @rsvp.update(rsvp_params)
    #     render :show
    #   else
    #     render json: @rsvp.errors.full_messages, status: 422
    #   end
    # end
  
    private 
  
    def set_invite
      @invite = Invite.find(params[:id])
  
      rescue
        render json: ['Invite not found'], status: :not_found
    end
  
    def invite_params
      params.require(:invite).permit(:sender_id, :reciever_id, :event_id)
    end
  end
  