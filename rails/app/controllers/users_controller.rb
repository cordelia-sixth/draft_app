class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  # def create
  #   # リクエストパラメータを受け取る
  #   @user = User.new(params)
  #   # DBに保存する
  #   @user.save
  # end
end
