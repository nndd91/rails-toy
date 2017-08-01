Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/adminpanel', as: 'rails_admin'
  devise_for :users, :controllers => {:confirmations => 'confirmations'}
  root 'static#index'
  get 'static/index'

  devise_scope :user do
    patch "/users/confirmation" => "confirmations#update", as: :user_confirmation_path
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
