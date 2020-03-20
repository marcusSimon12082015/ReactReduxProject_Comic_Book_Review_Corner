class Comment < ApplicationRecord

  #associations
  belongs_to :user
  belongs_to :review
  ###################################
  #validations
  validates :content, presence: true
  ###################################
end
