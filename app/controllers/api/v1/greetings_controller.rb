class Api::V1::GreetingsController < ApplicationController
  def index
    greeting = Message.pluck(:greeting).sample
    render json: greeting, status: :ok
  end
end
