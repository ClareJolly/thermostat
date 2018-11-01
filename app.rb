require 'sinatra/base'

class Thermostat < Sinatra::Base

  before do
    content_type :json
    headers 'Access-Control-Allow-Origin' => '*',
              'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
  end

  get '/temperature' do
    if @@temp.nil?
      "20"
    else
      @@temp
    end
  end

  post '/temp-set' do
    @@temp = params[:temp]
  end

  run! if app_file == $0

end
