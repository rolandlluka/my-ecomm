# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Creating Admin user..."
Admin.create!(
  email: 'admin@example.com',
  password: 'password',
  password_confirmation: 'password'
)
puts "Admin user created."

puts "Creating Categories..."
categories = [
  { name: 'Electronics', description: 'Gadgets and devices' },
  { name: 'Clothing', description: 'Apparel and accessories' },
  { name: 'Home & Kitchen', description: 'Home appliances and kitchenware' }
]

categories.each do |category|
  Category.create!(category)
end
puts "Categories created."

puts "Creating Products..."
products = [
  { name: 'Smartphone', description: 'Latest model smartphone', price: 699, category: Category.find_by(name: 'Electronics'), active: true },
  { name: 'T-shirt', description: 'Cotton T-shirt', price: 20, category: Category.find_by(name: 'Clothing'), active: true },
  { name: 'Blender', description: 'High power blender', price: 99, category: Category.find_by(name: 'Home & Kitchen'), active: true }
]

products.each do |product|
  Product.create!(product)
end
puts "Products created."

puts "Creating Stocks..."
products = Product.all

products.each do |product|
  %w[S M L].each do |size|
    Stock.create!(
      size: size,
      amount: rand(10..100),
      product: product
    )
  end
end
puts "Stocks created."

puts "Seeding completed!"
