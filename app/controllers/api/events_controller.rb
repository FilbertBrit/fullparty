class Api::EventsController < ApplicationController
  wrap_parameters include: Event.attribute_names + ['dateTime']
  before_action :set_event, only: [:show, :update, :destroy]

  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
      # render json: {event: @event}
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
    
    # render json: event_params
  end

  def index
    #events will not be simply events.all 
    #for now
    @events = Event.all
    render :index
  end

  def show
    render :show
  end

  def destroy
    @event.destroy
  end

  def update
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  private

  def set_event
    @event = Event.find(params[:id])
  rescue
    render json: ['Post not found'], status: :not_found
  end

  def event_params
    params.require(:event).permit(:title, :description, :location, :date_time, :capacity, :cost, :author_id)
  end

end
