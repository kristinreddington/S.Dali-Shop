class User < ApplicationRecord
  has_one :cart
  has_many :orders 

  has_secure_token :auth_token
  has_secure_password

  validates :email, :presence => true
  validates :email, :uniqueness => true
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  def invalidate_token
    self.update_columns(:auth_token => nil)
  end

  def self.validate_login(email, password)
    user = User.find_by(:email => email)
    if user && user.authenticate(password)
      user
    end
  end


end
