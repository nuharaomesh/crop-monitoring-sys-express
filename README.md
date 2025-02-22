# Crop System Backend

his is the backend of the Crop System project, built using Express.js and Prisma ORM. It provides APIs for managing crop-related data with security features such as JWT authentication.

## Tech Stack

- Node.js - JavaScript runtime
- Express.js - Web framework for Node.js
- Prisma ORM - Database ORM for handling queries
- JWT (JSON Web Token) - Authentication and security

## File Structure

```
backend/
│-- controllers/     # Handles request logic
│-- db/              # Database configuration
│-- models/          # Prisma models
│-- routes/          # API route definitions
│-- services/        # Business logic
│-- server.js        # Main application entry point
│-- package.json     # Project dependencies
```

## Installation

1. Clone the repository:

```bash
    git clone https://github.com/nuharaomesh/crop-monitoring-sys-express.git
    cd backend
```

2. Install dependencies:

```bash
    npm install
```

3. Create database & generate prisma client

```bash
    npx prisma db push
    npx prisma generate
```

4. Start the server

```bash
    npm start
```

## Some API Endpoints

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| POST   | /auth/register | Register a new user |
| POST   | /auth/login    | User login          |
| GET    | /crop/get      | Fetch all crops     |
| POST   | /crop/save     | Add a new crop      |
 
## Security Features

- JWT Authentication: Used for securing endpoints.
- Bcrypt Password Hashing: Ensures secure password storage.

## License
This project is licensed under the [MIT](Licence).