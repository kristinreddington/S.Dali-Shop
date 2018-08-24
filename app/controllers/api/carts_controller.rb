class Api::CartsController < ApiController
  before_action :require_login
  before_action :set_user

  def show
    @order_items = @user.cart.order_items 
    render json:  @order_items
  end

private

  def set_user
    @user = User.find_by(:auth_token => params[:data][:auth])
  end
end
