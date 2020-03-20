class CharactersController < ApplicationController
  before_action :set_character, only:[:show]

  def index
    @characters = Character.all
    render json: {characters: @characters }
  end

  def show
  end

  private

  def set_character
    @character = Character.find(params[:id])
  end
end
