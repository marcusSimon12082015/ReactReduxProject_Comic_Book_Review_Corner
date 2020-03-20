class Comic < ApplicationRecord
  mount_uploader :comic_cover_image, ImageUploader
  #associations
  belongs_to :publisher
  has_many :characters

  has_many :character_comics
  has_many :characters, :through => :character_comics

  has_many :artist_comics
  has_many :artists, :through => :artist_comics

  has_many :user_comics, dependent: :destroy
  has_many :users_comics, :through => :user_comics, :source => "user"

  has_many :reviews
  has_many :user_reviews, :through => :reviews, :source => "user"
end
