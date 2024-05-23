# Load the Rails application.
require_relative 'application'

print 'secret_key_base:', Rails.application.credentials.secret_key_base
# Initialize the Rails application.
Rails.application.initialize!
