# サーバーがHTTP cookieを処理できるようにする
if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_rails', domain: 'http://localhost:8080'
else
  Rails.application.config.session_store :cookie_store, key: '_rails'
end
