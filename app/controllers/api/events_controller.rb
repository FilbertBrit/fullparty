class Api::EventsController < ApplicationController
  wrap_parameters include: Event.attribute_names + ['dateTime', 'authorId']
  before_action :set_event, only: [:update, :destroy]

  def index
    # debugger
    @user = current_user
    
    # all events create by user
    # @events = Event.all.where(author_id: @user.id)
    @events = Event.all
    render :index
  end
  
  def show
    @current_user = current_user;
    @event = Event.find(params[:id])
    render :show
  end

  def create
    # debugger
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: { errors: @event.errors.full_messages }, status: :unprocessable_entity
    end
    # render json: event_params
  end
  
  def update
    @current_user = current_user;
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event.destroy
    # @user = current_user
    @events = Event.all
    # debugger
    render :index
    # render json: {events: @events}
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
