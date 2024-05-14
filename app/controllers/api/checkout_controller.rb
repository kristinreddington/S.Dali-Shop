class Api::CheckoutController < ApplicationController
    def create
        product = Product.find_by(:id => params[:data][:product][:id])
        # Create a PaymentIntent with amount and currency
        payment_intent = Stripe::PaymentIntent.create(
        amount: product.price,
        currency: 'usd',
        # In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      )
      {
      clientSecret: payment_intent.client_secret,
    }.to_json
    end
end
