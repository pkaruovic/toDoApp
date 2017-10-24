class ItemsController < ApplicationController
	before_action :get_item, only: [:update, :destroy]

	def index
		@items = Item.all
		render json: @items
	end

	def create
		@item = Item.new(user_params)
		if @item.save
			flash.now[:success] = "Your task is added"
		else
			flash.now[:danger] = @item.errors.full_messages
		end
	end

	def update
		if @item.update_attributes(user_params)
			flash.now[:success] = "Your task is updated"
		else
			flash.now[:danger] = @item.errors.full_messages
		end
	end

	def destroy
		@item.destroy
		flash.now[:success] = "Task is deleted"
	end

	private

	def user_params
		params.require(:item).permit(:id, :text, :finished)
	end

	def get_item
		@item = Item.find(params[:id])
	end
end
