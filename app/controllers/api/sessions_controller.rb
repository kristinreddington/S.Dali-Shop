class Api::SessionsController < ApiController
  before_action :require_login, except: [:create]

  def create
    if user = User.validate_login(params[:email], params[:password])
      allow_token_to_only_be_used_once_for(user)
      send_token_for_valid_login_of(user)
    else
      render_unauthorized("Error with email or password")
    end
  end

  def destroy
    logout
    head :ok
  end

  private

  def allow_token_to_only_be_used_once_for(user)
    user.regenerate_auth_token
  end

  def send_token_for_valid_login_of(user)
    render json: { token: user.auth_token }
  end

  def logout
    current_user.invalidate_token
  end

end
