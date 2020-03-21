class PublishersController < ApplicationController
  before_action :set_publisher, only:[:show]

  def index
    @publishers = Publisher.all
    render json: {publishers: @publishers }
  end

  def show
  end

  private

  def set_publisher
    @publisher = Publisher.find(params[:id])
  end
end
