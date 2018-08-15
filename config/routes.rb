Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api do
    resources :tokens, :only => [:create]
    resources :products, :except => [:new, :edit]
    resources :users, :except => [:new, :edit,]
    resources :carts, :only => [:show, :update]
  end

end
