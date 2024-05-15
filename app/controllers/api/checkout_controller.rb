
class Api::CheckoutController < ApplicationController
  protect_from_forgery

  def create
        product = params[:data][:product]
        print 'product: ', product
        # Create a PaymentIntent with amount and currency
        payment_intent = Stripe::PaymentIntent.create(
        amount: product[:price],
        currency: 'usd',
        # In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      )
      puts payment_intent
      render json: {
        clientSecret: payment_intent["client_secret"],
      }
    end
end
