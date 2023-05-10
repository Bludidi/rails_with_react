class MessagesController < ApplicationController
  def greeting
    greetings = [
      'Hello',
      'Sawubona',
      'Mholweni',
      'Bonjour',
      'Hola'
    ]

    @greeting = greetings.sample
    render :greeting
  end
end
