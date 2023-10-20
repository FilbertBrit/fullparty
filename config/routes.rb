Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :events, only: [:show, :create, :destroy, :index, :update] do
      resources :rsvps, only: [:index, :show, :create, :update]
    end
    # resources :comments, only: [:create, :update, :destroy]
  end
  get '*path', to: "static_pages#frontend_index"
end
