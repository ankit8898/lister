class UsersController < ApplicationController


	def index
		render json: User.all
	end

	def create
		logger.info "--------#{user_params.inspect}"
		@user  = User.new(user_params)
		if @user.save
			render json: @user, status: :ok
		else
			render json: @user.errors, status: :unprocessable_entity
		end
	end

	private
	def user_params
		params.permit(:name,:age)
	end
end