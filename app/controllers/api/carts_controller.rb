class Api::CartsController < ApiController
  before_action :require_login

  def show
    @order_items = current_order.order_items
    render json:  @order_items
  end

end
