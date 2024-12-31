# Calendar App Backend

This is a backend for a calendar app, built with Node.js and Express.js. The app allows users to create, read, update and delete events.

## Features

- User authentication and authorization
- Create, read, update and delete events
- Events can be associated with a user
- Users can only update and delete events that they own

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

## Installation

- Clone the repository
- Install the dependencies with `yarn install`
- Clone the `.env.template` and repalced for `.env`
- Start the server with `yarn dev`

## Endpoints

- POST /auth/new - Create a new user
- POST /auth/login - Login a user and get a JWT token
- GET /events - Get all events
- POST /events - Create a new event
- GET /events/:id - Get an event by id
- PUT /events/:id - Update an event by id
- DELETE /events/:id - Delete an event by id

## Environment Variables

- `PORT` - The PORT to start the server
- `MONGO_URI` - The URI of the MongoDB database
- `SECRET_JWT_SEED` - The secret key for the JWT token
- `TOKEN_EXPIRATION` - The expiration time of the JWT token

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
