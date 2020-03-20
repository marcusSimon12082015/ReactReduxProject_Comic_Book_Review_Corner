class CreatePublishers < ActiveRecord::Migration[5.0]
  def change
    create_table :publishers do |t|
      t.string :name
      t.timestamps
      t.string :publisher_image
    end
  end
end
