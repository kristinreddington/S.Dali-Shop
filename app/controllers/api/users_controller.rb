class Api::UsersController < ApiController
  before_action :require_login, :except => [:create]

  def create
    user = User.create!(user_params)
    render :json => { :token => user.auth_token }
  end

  def profile
    @user = User.find_by_auth_token!(request.headers[:token])
    if @user.cart
    render json: @user.cart.line_items
   end
    #render json: { user: { email: @user.email, cart: @user.cart.line_items } }
  end

  private

    def user_params
      params.require(:user).permit(:email, :password)
    end
end
