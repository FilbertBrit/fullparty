class Api::InvitesController < ApplicationController
    wrap_parameters include: Rsvp.attribute_names + ['userId', 'eventId']
    before_action :set_rsvp, only: [:show, :update]
  
    def index
      @rsvps = Rsvp.where(event_id: params[:event_id])
      render :index
    end
  
    def show 
      render :show
    end
  
    def create
      # debugger
      @rsvp = Rsvp.new(rsvp_params)
      if @rsvp.save
        render :show
        # render json: rsvp_params
      else
        render json: {errors: @rsvp.errors.full_messages }, status: :unprocessable_entity
      end
      # render json: rsvp_params
    end
  
    def update
      if @rsvp.update(rsvp_params)
        render :show
      else
        render json: @rsvp.errors.full_messages, status: 422
      end
    end
  
    private 
  
    def set_rsvp
      @rsvp = Rsvp.find(params[:id])
  
      rescue
        render json: ['RSVP not found'], status: :not_found
    end
  
    def rsvp_params
      params.require(:rsvp).permit(:status, :user_id, :event_id)
    end
  end
  