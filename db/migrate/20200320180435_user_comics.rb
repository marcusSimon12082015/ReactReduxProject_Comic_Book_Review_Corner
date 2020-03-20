class UserComics < ActiveRecord::Migration[5.0]
  def change
    t.belongs_to :user
    t.belongs_to :comic
    t.timestamps
  end
end
