# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
Product.destroy_all
Product.create!([{
  name: "Hunter Top", image_url: '/BeigeBlouse.jpg',
  price: 268, description: "100% Silk Taupe Coral Cropped Blouse"},
  {
    name: "Bond Gown", image_url: '/BlackGown.jpg',
    price: 576, description: "100% Silk Evening Gown"},
  {
    name: "Thunder trench", image_url: "/EveningVelvetBlueDress.jpg",
    price: 300, description: "Perfect trench for fall"},
  {
    name: "Enfield Cross Body purse", image_url: "/LaceBodySuit.jpg",
    price: 180, description: "Cheetah print cross-body bag with 3 compartments" },
  {
    name: "Skinny Tank dress", image_url: "/SilkDress.jpg",
    price: 150, description: "100% cotton body-forming casual dress"},
  {
    name: "Perfect White T", image_url: "/BeadedBlackBlouse.jpg",
    price: 80, description: "The quintessential classic white T" },
  {
    name: "Ballet Pink Biker Jacket", image_url: "/BlackBra.jpg",
    price: 550, description: "Classic leather jacket with a feminine twist"},
  {
    name: "Ralph Jeans", image_url: "/CocktailRing.jpg",
    price: 218, description: "Dark denim fitted skinny jeans" },
  {
    name: "Versailles Scarf", image_url: "OrangeDress",
    price: 300, description: "100% silk Versailles Palace inspired scarf" }
  ])
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
