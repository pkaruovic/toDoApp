class ItemsController < ApplicationController

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
		@item = Item.find(params[:id])
		if @item.update_attributes(user_params)
			flash.now[:success] = "Your task is updated"
		else
			flash.now[:danger] = @item.errors.full_messages
		end
	end

	def destroy
		Item.find(params[:id]).destroy
		flash.now[:success] = "Task is deleted"
	end

	private

	def user_params
		params.require(:item).permit(:id, :text, :finished)
	end
end
