class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.belongs_to :publisher
      t.string :name
      t.string :bio
      t.string :character_image
    end
  end
end
