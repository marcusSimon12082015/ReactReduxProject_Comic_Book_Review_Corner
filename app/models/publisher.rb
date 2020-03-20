class Publisher < ApplicationRecord
  mount_uploader :publisher_image, ImageUploader
  has_many :comics
  has_many :characters
end
