Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :index, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :notifications, only: [:show, :index, :create]
    resources :invites, only: [:show, :index, :create]
    resources :events, only: [:show, :create, :destroy, :index, :update] do
      resources :rsvps, only: [:index, :show, :create, :update]
      resources :comments, only: [:index, :create, :update, :destroy]
    end
  end
  get '*path', to: "static_pages#frontend_index"
end
