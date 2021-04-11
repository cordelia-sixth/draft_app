# insert_before 0
# Rack::Corsが最初に実行されるようにする

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # アクセスしてくる側のホスト名
    origins 'http://localhost:8080'
 
    # アクセスされる側のどのリソースにリクエストを送れるかを指定する
    resource '*',

      # headerを指定する
      headers: :any,

      # 許可するリクエストメソッドを指定する
      methods: [:get, :post, :put, :patch, :delete, :options, :head],

      # cookieを許可する
      credentials: true

      # response headerを追加できる
      # expose: %w[access-token uid client expiry]
  end
 end