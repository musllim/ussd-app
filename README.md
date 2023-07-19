#### ussd-app
This is a Node.js application for a USSD (Unstructured Supplementary Service Data) program. It allows users to interact with the application using a USSD menu on their mobile devices. The application is built using Express.js and utilizes the Africastalking API for USSD functionality.

## Installation
Before running the application, make sure you have Node.js and NPM (Node Package Manager) installed on your system. Then, follow these steps to install the necessary dependencies and start the server:

Clone the repository:
git clone https://github.com/emilenfc/ussd-app.git

# Navigate to the project directory:


cd ussd-app
Install the dependencies:
npm install 


Create a .env file in the root directory and provide the required environment variables. Refer to the .env.example file for the required variables.

Start the server:
npm start
The USSD server will be running on port 4000.

Usage
To interact with the USSD application, use a mobile device with USSD support and dial the provided USSD code. The application will present a menu with options to create an account or sign in.

USSD Menu Options
Create an account: Select option 1 to create a new account.
Sign in: Select option 2 to sign in with an existing account.
Dependencies
The following dependencies are used in this project:

africastalking: ^0.6.2
axios: ^1.4.0
dotenv: ^16.3.1
express: ^4.18.2
lodash: ^4.17.21
nodemon: ^3.0.1
ussd-menu-builder: ^1.2.0

Author
# IYADUKUNZE Emile
Feel free to contact the author if you have any questions or suggestions.
