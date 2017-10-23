class AddUniqueToItemsText < ActiveRecord::Migration[5.1]
  def change
  	add_index :items, :text, unique: true
  end
end
