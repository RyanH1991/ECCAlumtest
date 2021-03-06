Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :index, :show]
    resources :admins, only: [:new, :create, :index, :show]
    resource :session, only: [:create, :destroy]

    get "search", to: "users#search"
  end
end
