class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password', 'phoneNumber'] # ask about this

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

  private

  def user_params
    params.require(:user).permit(:phone_number, :username, :password)
  end
end
