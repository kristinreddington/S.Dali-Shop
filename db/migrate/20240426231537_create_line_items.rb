class CreateLineItems < ActiveRecord::Migration[7.1]
  def change
    create_table :line_items do |t|
      t.references :cart, foreign_key: true
      t.references :product, foreign_key: true
      t.integer :quantity, default: 1, null: false
      t.timestamps
    end
  end
end
