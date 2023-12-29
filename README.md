
# Apple Ampire

## Introduction

Welcome to Apple_ampire! This project is built with Express.js and follows a specific architecture. This README file will guide you through setting up the environment variables and running the project in different environments.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/mdbakibillahrohan/apple_ampire.git


Navigate to the Project Directory:

#bash
cd apple_ampire
Install Dependencies:

bash
Copy code
npm install
Configuration
This project uses environment variables for configuration. You should create a .env file in the root directory based on the provided env-example folder. Follow these steps:

Copy the Example Environment Variables:

#bash
cp env-example/.env.local .env
For development and production environments, use the following commands:

#bash
cp env-example/.env.dev .env

#bash
cp env-example/.env.prod .env
Edit the .env File:

Open the newly created .env file and set the values for the variables according to your local, development, or production environment.

Usage
###
Local Development (loc)
For local development, use the following command:
#bash
npm run loc
This script sets up the development environment locally.

###
Development Server (dev)
For the development server environment, use the following command:
#bash
npm run dev
This script sets up the development server environment.

###
Production (prod)
For the production environment, use the following command:
#bash
npm run prod
This script sets up the production environment.


License
This project is licensed under the MIT License.


