Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resource :events, only: [:show, :create, :destroy, :index, :update, :index]
    resources :rsvps, only: [:create, :update]
    resources :comments, only: [:create, :update, :destroy]
  end
end
