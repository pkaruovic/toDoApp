class Item < ApplicationRecord
	validates :text, presence: true, uniqueness: {scope: :text}
end
