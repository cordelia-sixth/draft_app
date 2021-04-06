class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    request_data = JSON.parse(request.body.read)
    user = User.create(name: params[:name], email: params[:email])
    render json: {success: "Hello, #{user.name}"}
  end

  def destroy
    User.destroy(params[:id])
  end
end
