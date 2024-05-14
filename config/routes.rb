Rails.application.routes.draw do
  get 'order_items/create'
  get 'order_items/update'
  get 'order_items/destroy'

  namespace :api do
    post '/login' => 'sessions#create'
    delete '/logout' => 'sessions#destroy'
    get '/profile' => 'users#profile'
    resources :order_items, :except => [:new, :edit]
    resources :line_items, :only => [:create, :destroy]
    resources :products, :except => [:new, :edit]
    resources :users, :except => [:new, :edit]
    resources :carts, :only => [:show]
    resources :checkout, :only => [:create]
  end
end
