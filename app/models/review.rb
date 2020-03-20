class Review < ApplicationRecord
  #associations
  belongs_to :user
  belongs_to :comic
  has_many :comments
  #############################################
end
