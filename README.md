# GraphQL Playground Project

🚀 A simple GraphQL API built with **Node.js**, **TypeScript**, and **Apollo Server**.
This project is a playground for experimenting with GraphQL schemas, queries, mutations, and resolvers.

---

## Features

- ⚡ **TypeScript** for type safety
- 🛠 **Apollo Server** as GraphQL engine
- 🔄 **Nodemon** for hot reload during development
- 📡 Example **queries and mutations** (e.g., `createUser`, `getUsers`)
- 🎯 Designed for learning and experimenting with GraphQL

---

## Requirements

- Node.js **>= 18**
- npm or yarn

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/graphql-playground.git
cd graphql-playground
npm install
```

---

## Scripts

### Start in Development

```bash
npm run dev:simple
```

Runs the GraphQL server with **Nodemon** and **ts-node**.

### Build for Production

```bash
npm run build
```

Compiles TypeScript into JavaScript (`dist/` folder).

### Start in Production

```bash
npm start
```

Runs the compiled server from the `dist/` folder.

---

## Usage

Once the server is running, open:

👉 [http://localhost:4000/](http://localhost:4000/)

You’ll see the **GraphQL Playground** (or Apollo Studio).
From there, you can run queries and mutations.

### Example Query

```graphql
query {
  getUsers {
    id
    nome
    email
  }
}
```

### Example Mutation

```graphql
mutation {
  createUser(nome: "John Doe", email: "john@example.com") {
    id
    nome
    email
  }
}
```

---

## Project Structure

```
.
├── src/              # Source code
│   ├── schema.ts     # GraphQL schema definition
│   ├── resolvers.ts  # Query and mutation resolvers
│   └── server.ts     # Apollo Server setup
├── simple-server.ts  # Minimal standalone GraphQL server
├── package.json
└── tsconfig.json
```

---

## Notes

- You may see a **deprecation warning** related to `fs.Stats` when running with `ts-node`.
  It’s safe to ignore. For a cleaner setup, consider using [`tsx`](https://github.com/esbuild-kit/tsx).

---

## License

MIT License © 2025

---
