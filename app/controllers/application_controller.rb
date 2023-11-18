class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection

    rescue_from StandardError, with: :unhandled_error
    rescue_from ActionController::InvalidAuthenticityToken,
    with: :invalid_authenticity_token

    protect_from_forgery with: :exception # csrf

    before_action :attach_authenticity_token, :snake_case_params

    # def test
    #     if params.has_key?(:login)
    #       login!(User.first)
    #     elsif params.has_key?(:logout)
    #       logout!
    #     end
      
    #     if current_user
    #       render json: { user: current_user.slice('id', 'username', 'session_token') }
    #     else
    #       render json: ['No current user']
    #     end
    # end

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
        # user whose `session_token` == token in `session` cookie
    end
    
    def login!(user)
        # reset `user`'s `session_token` and store in `session` cookie
        session[:session_token] = user.reset_session_token! # token in db == token in browser cookie
        @current_user = user
    end
    
    def logout!
        # reset the `current_user`'s session cookie, if one exists
        # clear out token from `session` cookie
        current_user.reset_session_token! if current_user# remove token from db
        session[:session_token] = nil # remove token from browser cookies
        @current_user = nil # so that subsequent calls to `current_user` return nil
    end
    
    def require_logged_in
        # unless current_user
        #     render json: { message: 'Unauthorized' }, status: :unauthorized 
        # end
        # no redirect in SPA
        if !logged_in?
            render json: {errors: ['Must be logged in']}, status: :unauthorized
        end
    end

    def require_logged_out
        # no redirect in SPA
        if logged_in?
          render json: {errors: ['Must be logged out']}, status: :unauthorized
        end
    end

    def logged_in?
        !!current_user
    end
    

    private
    def attach_authenticity_token
        # grab this in restoreSession
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end

    def snake_case_params
    params.deep_transform_keys!(&:underscore)
    end
      
    def invalid_authenticity_token
        render json: { message: 'Invalid authenticity token' }, 
            status: :unprocessable_entity
    end

    def unhandled_error(error)
        if request.accepts.first.html?
            raise error
        else
            @message = "#{error.class} - #{error.message}"
            @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
            render 'api/errors/internal_server_error', status: :internal_server_error
            
            logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
        end
    end
end
