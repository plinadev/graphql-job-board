# GraphQL Job Board

A full-stack job board application built with **GraphQL**, **Apollo**, **React**, and **SQLite**.  
It demonstrates authentication, job management, and data fetching via GraphQL queries, mutations, and subscriptions.

---

## Features

### Users
- Register and log in using JWT authentication  
- Browse all available job postings  
- View company information and job details  
- Create and manage job postings  
- View all jobs created by company  

### Core Functionality
- GraphQL API powered by Apollo Server  
- Real database integration with SQLite (via Knex)  
- Secure JWT-based authentication  
- Code generation for GraphQL schema and resolvers  
- Client-side caching and request handling with Apollo Client  
- TypeScript across both client and server  

---

## Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React 19, Apollo Client, React Router 7, Bulma |
| **Backend** | Node.js, Express, Apollo Server, GraphQL |
| **Database** | SQLite with Knex |
| **Auth** | express-jwt, jsonwebtoken |
| **Codegen** | GraphQL Code Generator |
| **Language** | TypeScript |

---

## Project Structure

```

graphql-job-board/
├── client/               # React + Apollo Client frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── graphql/
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── server/               # Node.js + Apollo Server backend
│   ├── src/
│   │   ├── db/           # SQLite + Knex setup
│   │   ├── schema/       # GraphQL schema & resolvers
│   │   ├── loaders/      # Dataloaders for batching
│   │   └── index.ts
│   ├── knexfile.ts
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/plinadev/graphql-job-board.git
   cd graphql-job-board

2. **Install dependencies**

   ```bash
   npm install
   ```

   or if client/server are separate:

   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the **server** directory:

   ```env
   JWT_SECRET=your_jwt_secret
   DATABASE_URL=./data/database.db
   PORT=4000
   ```

   (Optional for client, if API endpoint differs:)

   ```env
   VITE_API_URL=http://localhost:4000/graphql
   ```

4. **Run both client and server concurrently**

   ```bash
   npm run dev
   ```

   or individually:

   ```bash
   # Backend
   cd server
   npm run dev

   # Frontend
   cd ../client
   npm run dev
   ```

5. Open the app at [http://localhost:5173](http://localhost:5173)
   (or the Vite default port).

---

## GraphQL Schema Overview

### Queries

* `jobs`: list all job postings
* `job(id)`: get details of a single job
* `company(id)`: get company information

### Mutations

* `login(email, password)`: authenticate a user
* `createJob(title, description, companyId)`: create a new job
* `deleteJob(id)`: delete a job posting

### Types

* **Job**: title, description, company, createdAt
* **Company**: name, description, jobs
* **User**: email, role

---

## Development Tools

* **GraphQL Codegen** — auto-generates TypeScript types for schema & resolvers
* **Knex** — query builder and schema migration tool
* **DataLoader** — optimizes database queries and avoids N+1 issues
* **Concurrently** — runs both client and server in development

---

## Example Commands

### Server

```bash
# Run in watch mode
npm run dev

# Generate GraphQL types
npm run codegen
```

### Client

```bash
# Start frontend
npm run dev

# Lint
npm run lint
```

---

## Database

This project uses **SQLite** (via Knex) for simplicity, stored locally.

You can view your database using any SQLite viewer:

```bash
npx knex --knexfile knexfile.ts migrate:latest
```

---

## Authentication

* JWT tokens are issued upon successful login
* Protected routes in the API require a valid token in the `Authorization` header
* Example:

  ```bash
  Authorization: Bearer <token>
  ```

---

