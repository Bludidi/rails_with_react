class MessagesController < ApplicationController
  def random
    greetings = Message.order("RANDOM()").first
    render json: { greeting: greetings.greeting }
  end
end
