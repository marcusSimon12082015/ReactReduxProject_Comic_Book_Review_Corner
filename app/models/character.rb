class Character < ApplicationRecord
  mount_uploader :character_image, ImageUploader

  #associations
  belongs_to :publisher
  has_many :character_comics
  has_many :comics, :through  => :character_comics
  ##################################################################
end
