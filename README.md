# Customer Points Management System - A REST API

This project is a REST API that allows customers to register, earn points, and redeem points. The API is built using Node.js, MongoDB, Express.js, dotenv, and cors.

## Description

This project is a REST API that allows customers to register, earn points and redeem points. The API is built using Node.js, MongoDB, Express.js, dotenv, and cors.

## Features

- Customers can register by providing their details such as name, email, and password.
- Customers can earn points by performing specific actions such as purchasing products.
- Customers can view their current points balance.
- Customers can redeem points by exchanging them for rewards.
- Admins can view a list of all customers and their point balances.
- Admins can add or remove points from a customer's balance.

## Installation

1. Clone the repository.
2. Install Node.js on your system.
3. Run **_npm install_** to install the required dependencies.
4. Create a **_.env_** file in the root directory of the project and add the following environment variables:
   - DB_URI - MongoDB URI
   - PORT - Port on which the server will run
   - SECRET - Secret key used for JWT authentication
5. Run npm start to start the server.

## License

This project is licensed under the [MIT License](http://www.opensource.org/licenses/).
Brian Sagalla
