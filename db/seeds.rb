# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
products = Product.create( [
  {name: "Harley boots", image_url: 'https://i1.adis.ws/s/rb/W265F1302F-001-SET/1', price: 268, description: "Leather ankle boot with 3 inch heel"},
  {name: "Neil Barrett jacket", image_url: 'http://www.varahiattrichi.com/images/SeebyChloe/798388.jpg', price: 576, description: "Cloud blue suede fall jacket"},
  {name: "Thunder trench", image_url: "http://www.kimranger.com/images/category_15/YVES%20SAINT%20LAURENT%20Women%20Clothings%20Polyester%20Trench%20coat%20Grey%20%204009175%20RDKVUCU.jpg", price: 300, description: "Perfect trench for fall"},
  {name: "Enfield Cross Body purse", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6IEu_fhtn9z1vNKywEqHX6a6vrfP1Hjj6jF0m3mAx0eciR_U5g", price: 180, description: "Cheetah print cross-body bag with 3 compartments" },
  {name: "Skinny Tank dress", image_url: "http://becomechic.com/wp-content/uploads/2017/04/James-Perse-Skinny-Tank-Dress-In-Platoon.jpg", price: 150, description: "100% cotton body-forming casual dress"},
  {name: "Perfect White T", image_url: "https://mp-media.reebonz.com/images/p-ee/reebonz-james-perse-t-shirt-white-0-james-perse-1-ee27cb3c-8641-4df9-8426-20eb2bea445d.jpg;mode=pad;bgcolor=fff;404=404.jpg;width=402;height=500", price: 80, description: "The quintessential classic white T" },
  {name: "Ballet Pink Biker Jacket", image_url: "https://cdna.lystit.com/photos/4756-2016/02/18/allsaints-nude-pink-plait-balfern-leather-biker-jacket-beige-product-1-931855068-normal.jpeg", price: 550, description: "Classic leather jacket with a feminine twist"},
  {name: "Ralph Jeans", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FH7lJBoYjnF9iNE4flxg67XrSSpvFw3aUZmjQFgFpylQVVNrVw", price: 218, description: "Dark denim fitted skinny jeans" },
  {name: "Versailles Scarf", image_url: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--MP2189_PM2_Front%20view.jpg?wid=273&hei=273", price: 300, description: "100% silk Versailles Palace inspired scarf" }
  ])
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
