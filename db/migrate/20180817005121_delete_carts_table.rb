class DeleteCartsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :carts
  end
end
