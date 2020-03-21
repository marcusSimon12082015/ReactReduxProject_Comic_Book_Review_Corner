Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :comics, only:[:index,:show]
  resources :publishers, only:[:index,:show]
  resources :characters, only:[:index,:show]
  resources :reviews, only:[:index,:show]
end
