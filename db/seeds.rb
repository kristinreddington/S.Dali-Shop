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
    name: "Velour Starlight Dress", image_url: "/EveningVelvetBlueDress.jpg",
    price: 300, description: "Made of lush velour fabric, this long-sleeved shapely dream is curve-loving luxury."},
  {
    name: "Gossamer BodySuit", image_url: "/LaceBodySuit.jpg",
    price: 180, description: "Need we say more" },
  {
    name: "Tea & Cocktails Dress", image_url: "/SilkDress.jpg",
    price: 150, description: "100% silk grey to rose gradiant dress for when you mean business...or pleasure."},
  {
    name: "Legionarie Blouse", image_url: "/BeadedBlackBlouse.jpg",
    price: 80, description: "The quintessential top to take over in." },
  {
    name: "Femme Fatal Brassiere", image_url: "/BlackBra.jpg",
    price: 550, description: "Just enough padding, with no wire for a comfortable, high-end fit, of course made from 100% silk"},
  {
    name: "Amythest Dream Ring", image_url: "/CocktailRing.jpg",
    price: 218, description: "Amythest stone set in pave diamonds on a solid gold ring. Made for a Queen." },
  {
    name: "Versailles Dress", image_url: "/OrangeDress.jpg",
    price: 300, description: "An artisticlly designed beautiful burnt orange sundress made for lazy late summer and early Autumn days." }
  ])
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
