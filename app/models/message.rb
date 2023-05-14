class Message < ApplicationRecord
  validates :greeting, presence: true, uniqueness: true
end
