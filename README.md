# Jaynstan LMS

Monorepo for the Jaynstan LMS platform.

## Ports

| Service  | Port |
|----------|------|
| API      | 4500 |
| Web      | 4000 |
| Postgres | 4555 |
| Redis    | 4560 |

## Prerequisites

- Node.js >= 20
- npm >= 10
- Docker Desktop

## Setup

npm install
npm run docker:up

## Development

npm run dev

## Scripts

- npm run dev         start API and web concurrently
- npm run dev:api     start API only
- npm run dev:web     start web only
- npm run build       build all workspaces
- npm run docker:up   start Postgres and Redis
- npm run docker:down stop containers