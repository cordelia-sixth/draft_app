class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  helper_method :login!, :current_user

  # sessionにユーザー情報を保存してログイン状態とみなす
  def login!
    session[:user_id] = @user.id
  end

  # ログイン中のユーザーを返す
  def current_user
    @current_user ||= Person.find(session[:user_id]) if session[:user_id]
  end
end
