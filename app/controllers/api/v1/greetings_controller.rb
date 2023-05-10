class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Message.order('RANDOM()').first
    render json: @greetings
  end
end
