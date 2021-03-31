class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    request_data = JSON.parse(request.body.read)
    user = User.create(name: params[:name])
    render json: {success: "Hello, #{user.name}"}
  end
end
