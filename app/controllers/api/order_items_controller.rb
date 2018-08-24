class Api::OrderItemsController < ApiController

  def create
    @cart = current_order
    @order_item = @cart.order_items.new(order_item_params)
    @order.save
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
    params.require(:order_item).permit(:quantity, :product_id, :order_id)
  end

end
