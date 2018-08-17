class Api::OrderItemsController < ApiController

  def create
    @order = current_order
    @order_item = OrderItem.new(order_item_params)
    @order.order_items << @order_item
    @order.save
    @order_item.save
    session[:order_id] = @order.id
    render json: @order_item
  end

  def update
  end

  def destroy
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.destroy
    @order_items = @order.order_items
  end

  private
  def order_item_params
    params.require(:order_item).permit(:quantity, :product_id)
  end

  def current_order
    if !session[:order_id].nil?
      Order.find(session[:order_id])
    else
      Order.new
    end
  end

end
