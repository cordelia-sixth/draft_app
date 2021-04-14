# login/logioutを扱う
class SessionsController < ApplicationController

  # before_action: :current_user
  
  # ログイン処理
  def login
    # メールアドレスからユーザーを検索
    @user = Person.find_by(email: session_params[:email])

    # ユーザーが正常ならログイン
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: { logged_in: true, user: @user }

    # 不正なユーザーならエラー
    else
      render json: { status: 401, errors: ['認証に失敗しました。', '正しいメールアドレス・パスワードを入力し直すか、新規登録を行ってください。'] }
    end
  end

  # ログアウト
  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end

  # ユーザーのログイン状態を返す
  def logged_in?
    if current_user
      render json: { logged_in: true, user: current_user }
    else
      render json: { logged_in: false, message: 'ユーザーが存在しません' }
    end
  end

  private
    def session_params
      params.require(:user).permit(:username, :email, :password)
    end
end