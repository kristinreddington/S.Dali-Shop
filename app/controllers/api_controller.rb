class ApiController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
  include ActionController::HttpAuthentication::Basic::ControllerMethods
  include ActionController::HttpAuthentication::Digest::ControllerMethods
  #helper_method :require_login, :current_user
  #acts_as_token_authentication_handler_for User, fallback: :none
  before_action :authenticate_token, :only => [:current_cart]

  def require_login
    authenticate_token || render_unauthorized("Access denied")
  end


  def current_user
    @current_user ||= authenticate_token
  end

  def current_cart
    current_user
    if @current_user.cart
      @cart = @current_user.cart
    else
      @cart = Cart.create(:user_id => user.id)
    end
  end

  def authenticate_token
      authenticate_with_http_token do |token, options|
       user = User.find_by(auth_token: token)
    end
  end

  protected

  def render_unauthorized(message)
    errors = { errors: [detail: message] }
    render json: errors, status: :unauthorized
  end

  private


end
