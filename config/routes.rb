Rails.application.routes.draw do
    get "/" => "home#top"
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    get "/edit" => "home#edit"
    get "/help" => "home#help"
    get "/save" => "home#save"
end
