class LineItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item

  def total
    self.quantity * self.product.price
  end 
end
