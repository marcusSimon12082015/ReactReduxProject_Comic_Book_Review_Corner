class ComicsController < ApplicationController
  before_action :set_comic, only:[:show]

  def index
    #byebug
    @comics = Comic.all
    render json: {comics: @comics.as_json(include: :publisher)}
  end

  def show
    if @comic
      render json: {comic: @comic }
    else
      render json: {error: true}
    end
  end

  private

  def set_comic
    @comic = Comic.find(params[:id])
  end
end
