class Artist < ApplicationRecord
  mount_uploader :artist_image, ImageUploader

   #associations
  belongs_to :type

  has_many :artist_comics
  has_many :comics, :through => :artist_comics

  ##############################################
end
