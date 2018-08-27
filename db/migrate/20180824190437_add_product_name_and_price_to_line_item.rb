class AddProductNameAndPriceToLineItem < ActiveRecord::Migration[5.2]
  def change
    add_column :line_items, :product_name, :string
    add_column :line_items, :product_price, :integer
    add_column :line_items, :product_description, :string
    add_column :line_items, :product_image, :string 
  end
end
