Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :comics, only:[:index,:show]
  resources :publishers, only:[:index,:show]
  resources :characters, only:[:index,:show]
  resources :reviews, only:[:index,:show]

  get 'user_comics/add_comic_to_user/:comic_id', to:'user_comics#add_comic_to_user', as:'add_comic_to_user'

  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
end
