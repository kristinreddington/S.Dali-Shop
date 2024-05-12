require 'stripe'

# This is your test secret API key.
Stripe.api_key = Rails.application.credentials[:stripe][:secret]