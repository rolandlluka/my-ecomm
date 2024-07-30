# My-Ecomm

This is a full-featured e-commerce application built using Ruby on Rails 7, Hotwire, Tailwind CSS, and PostgreSQL. The application allows for the management of products, categories, orders, and users with a simple and intuitive interface.

## Features

* User authentication and management with Devise
* Product management with images
* Category management with images
* Order processing
* Stock management
* Admin panel for managing categories, products, and orders

## Technologies

* Ruby on Rails 7
* Hotwire
* Tailwind CSS
* PostgreSQL
* Stripe
* Devise for authentication
* Active Storage for file uploads

## Requirements

* Ruby 3.0+
* Rails 7.1+
* PostgreSQL
* Node.js and Yarn

## Setup

1. Clone the repository:

```sh
git clone https://github.com/rolandlluka/my-ecomm.git
cd my-ecomm
```

2. Install dependencies:

```sh
bundle install
yarn install
```

3. Set up the database:
```sh
rails db:create
rails db:migrate
rails db:seed
```

4. Run the development server:

```sh
bin/dev
```

5. Access the application:
Open your browser and navigate to http://localhost:3000

## Admin Panel

To manage products, orders, and other administrative tasks, log in to the admin panel.

1. Admin Login:
   Navigate to the admin login page:
```sh
http://localhost:3000/admins/sign_in
```
2. Admin Dashboard:
   Once logged in, you will be redirected to the admin dashboard:
```sh
http://localhost:3000/admin
```

Use the following credentials to log in:
* Email: `admin@example.com`
* Password: `password`

## Contributing
We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to the branch.
5. Create a new Pull Request.
## License
This project is licensed under the MIT License.

Feel free to contact me at `rolandlluka@gmail.com` for any queries or issues.

