class ReviewsController < ApplicationController
  before_action :set_review, only:[:show]

  def index
    @reviews = Review.all
    render json: {reviews: @reviews.as_json(include: [:comic,:user])}
  end

  def show
    if @review
      render json: {review: @review }
    else
      render json: {error: true}
    end
  end

  private

  def set_review
    @review = Review.find(params[:id])
  end
end
