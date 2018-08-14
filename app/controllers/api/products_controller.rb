class Api::ProductsController < ApiController

  before_action :set_product, :only => [:show, :update, :destroy]

  def index
    render json: Product.all
  end

  def show
    render json: @product
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: {:message => product.errors }, :status => 400
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: { :message => product.errors }, :status => 400
    end
  end

  def destroy
    if @product.destroy
      render json: { :message => "Successfully Deleted!" }, :status => 204
    else
      render json: { :message => "Unable to Delete Product" }, :status => 400
    end
  end

  private

  def set_product
    @product = Product.find_by(:id => params[:id])
  end

  def product_params
     params.require(:product).permit(:name, :price, :image_url, :description)
  end

end
