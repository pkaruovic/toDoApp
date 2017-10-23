class AddFinishedToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :finished, :boolean, default: false
  end
end
