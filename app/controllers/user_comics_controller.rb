class UserComicsController < ApplicationController
  include CurrentUserConcern
  def add_comic_to_user
      @comic = Comic.find_by_id(params[:comic_id])
      if !@current_user.add_comic_to_user(@comic).nil?
        if @current_user.save
          render json: {user: @current_user.as_json(include: :comicsofUser), success: "Comic successfuly added to your collection!!!"}
        else
          render json: {error: "There was an error while processing!!!!"}
        end
      else
        render json: {warning: "You don't have enough credits to purchase this comic!!!"}
      end
  end
end
