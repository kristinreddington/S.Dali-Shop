class ChangeOrderItemsOrderId < ActiveRecord::Migration[5.2]
  def change
    change_column :order_items, :product_id, :integer
    change_column :order_items, :order_id, :integer   
  end
end
