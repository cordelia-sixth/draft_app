class UsersController < ApplicationController

  # 要素がシンボルの配列を作成
  # before_action :set_user, only: %i[ show edit update destroy ]

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

  # PATCH/PUT /users/1 or /users/1.json
  def update
    puts params[:id]
    user = User.find(params[:id])
    user.update(name: params[:name], email: params[:email])
    render json: {success: "Successful updating"}
  end

  def destroy
    User.find(params[:id]).delete
    render json: {success: "Successful deleting"}
  end
end

# private
#   def set_user
#     @user = User.find(params[:id])
#   end