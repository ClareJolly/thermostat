require 'sinatra/base'
# require "sinatra/cookies"

class Thermostat < Sinatra::Base
#   helpers Sinatra::Cookies
#   configure do
#     use Rack::Session::Pool
#   # enable :sessions
#   # set :session_secret, 'secret'
# end

# require "sinatra/cookies"

  before do
    content_type :json
    headers 'Access-Control-Allow-Origin' => '*',
              'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
  end

  get '/temperature' do
    content_type :json
    if @@temp.nil?
      "20".to_json
    else
      @@temp
    end
  end

  post '/temp-set' do
    @@temp = params[:temp]
  end

  run! if app_file == $0

end
