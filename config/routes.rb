Rails.application.routes.draw do
  namespace :api do
    resources :products, :except => [:new, :edit]
  end
end
