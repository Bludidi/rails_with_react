class MessagesController < ApplicationController
  def greeting
    greetings = %w[
      Hello
      Sawubona
      Mholweni
      Bonjour
      Hola
    ]

    @greeting = greetings.sample
    render :greeting
  end
end
