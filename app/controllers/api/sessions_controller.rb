class Api::SessionsController < ApplicationController
  def show
    # debugger
    # banana
    if current_user
      @user = current_user
      # render json: { user: current_user }
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
  #   debugger
    @user = User.find_by_credentials(params[:phone_number], params[:password])

    if @user
      login!(@user)
      render 'api/users/show'
      # render json: { user: @user}
    else
      render json: { errors: ['The provided credentials were invalid.']},
        status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: { message: 'success'}
  end
end
