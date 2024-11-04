Rails.application.routes.draw do
  constraints(ClientDomainConstraint.new) do
    scope module: 'client' do
      root 'home#index', as: :client_root
    end
  end

  constraints(AdminDomainConstraint.new) do
    scope module: 'admin', as: :admin do
      root 'home#index', as: :admin_root
      devise_for :users, controllers: { sessions: 'admin/sessions' }
      resources :domains, except: :show
    end
  end
end
