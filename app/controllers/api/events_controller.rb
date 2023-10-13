class Api::EventsController < ApplicationController
  wrap_parameters include: Event.attribute_names + ['dateTime']
  before_action :set_event, only: [:show, :update, :destroy]

  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
    # render json: event_params
  end

  def index
    debugger
    @user = current_user

    # all events create by user
    @events = Event.all.select { |event| event.author_id == @user.id}
    render :index
  end

  def show
    render :show
  end

  def destroy
    @event.destroy
    # @user = current_user
    @events = Event.all
    # debugger
    render :index
    # render json: {events: @events}
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
