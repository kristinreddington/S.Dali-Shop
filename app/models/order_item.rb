class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :product

  validate :product_present
  validate :order_present
  validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :quantity, :presence => true


  def total_price
    self.product.price * quantity
  end

  private
  def product_present
    if product.nil?
      errors.add(:product, "is not valid or is not active.")
    end
  end

  def order_present
    if order.nil?
      errors.add(:order, "is not a valid order.")
    end
  end

end
