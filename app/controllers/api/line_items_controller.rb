class Api::LineItemsController < ApiController
  before_action :set_line_item, :only => [:destroy]

  def create
    product = Product.find_by(:id => params[:data][:product][:id])
    @line_item = LineItem.new(
      :product_id => params[:data][:product][:id],
      :product_name => params[:data][:product][:name],
      :product_price => params[:data][:product][:price],
      :product_description => params[:data][:product][:description],
      :product_image => params[:data][:product][:image_url]
    )
    @user = User.find_by(:auth_token => params[:data][:auth])
    if @user.cart
      @cart = @user.cart
    else
      @cart.Cart.new(:user_id => @user.id)
    end
    @cart.line_items << @line_item
    @cart.save
    render json: @line_item
  end

  def destroy
    render json: @line_item
    @line_item.destroy
    #binding.pry
  end

private

  def set_line_item
    @line_item = LineItem.find(params[:id])
  end



end
