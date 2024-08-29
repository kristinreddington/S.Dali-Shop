Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "https://s-dali-shop.onrender.com"

# for dev until I find workaround
# Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "http://localhost:3000"
