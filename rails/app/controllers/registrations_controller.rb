# 新規登録を処理する
class RegistrationsController < ApplicationController
  def signup
    @user = Person.new(registrations_params)
    if @user.save
      login!
      render json: { status: :created, user: @user }
    else
      render json: { status: 500 }
    end
  end

  private
	def registrations_params
		params.require(:user).permit(:email, :password, :password_confirmation)
	end
end