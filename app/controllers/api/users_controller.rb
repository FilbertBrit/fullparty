class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password', 'phoneNumber'] # ask about this
  before_action :set_user, only: [:update]
  def index
    debugger
    @user = current_user
    render :index
  end

  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      login!(@user)
      # render json: {user: @user}
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
    # render json: user_params
  end

  def update 
    # debugger
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def set_user
    debugger
    @user = User.find(params[:id])

    rescue
      render json: ['User not found'], status: :not_found
  end

  def user_params
    params.require(:user).permit(:phone_number, :name, :password, :bio)
  end
end
