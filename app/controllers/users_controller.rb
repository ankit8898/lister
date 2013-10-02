class UsersController < ApplicationController


	def index
		render json: User.all
	end

	def create
		@user  = User.new(user_params)
		if @user.save
			render json: @user, status: :ok
		else
			render json: @user.errors, status: :unprocessable_entity
		end
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
		head :no_content
	end

	private
	def user_params
		params.permit(:name,:age)
	end
end