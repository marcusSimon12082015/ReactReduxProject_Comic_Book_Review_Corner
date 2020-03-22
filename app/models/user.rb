class User < ApplicationRecord
  has_secure_password

  #associations
   has_many :user_comics
   has_many :comicsofUser, :through => :user_comics, :source => 'comic'

   has_many :reviews
   has_many :comic_reviews, :through => :reviews, :source => 'comic'

   has_many :comments
   ##############################################################################
   validates_presence_of :email
   validates_uniqueness_of :email

   def add_comic_to_user(comic)
     if self.credits >= comic.price.to_i
       self.comicsofUser << comic
       self.credits -= comic.price.to_i
       self
     else
       return nil
     end
   end
end
