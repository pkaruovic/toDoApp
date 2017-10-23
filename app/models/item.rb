class Item < ApplicationRecord
	validates :text, presence: true, length: {minimum: 1}, uniqueness: {scope: :text}
end
