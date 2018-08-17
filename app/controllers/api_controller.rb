class ApiController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  #helper_method :require_login, :current_user
  #acts_as_token_authentication_handler_for User, fallback: :none

  def require_login
    authenticate_token || render_unauthorized("Access denied")
  end


  def current_user
    @current_user ||= authenticate_token
  end

  def current_order
    if !session[:order_id].nil?
      Order.find(session[:order_id])
    else
      Order.new
    end
  end

  protected

  def render_unauthorized(message)
    errors = { errors: [detail: message] }
    render json: errors, status: :unauthorized
  end

  private

  def authenticate_token
    authenticate_with_http_token do |token, options|
      User.find_by(auth_token: token)
    end
  end

end
