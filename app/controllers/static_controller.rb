class StaticController < ApplicationController
  require 'rest-client'

  def index
    url = 'https://icanhazdadjoke.com/search'
    headers = {"Accept": "application/json"}
    @jokes = JSON.parse(RestClient.get(url, headers))['results'].map { |result|
        result['joke']
    }
  end
end
