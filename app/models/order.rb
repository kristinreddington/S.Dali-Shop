class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items
  has_many :products, through: :order_items
  belongs_to :order_status

  def subtotal
   order_items.collect { |oi| (oi.quantity * oi.unit_price) }.sum
  end


  private
  def set_order_status
    self.order_status_id = 1
  end
  
end
