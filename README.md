This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

- Node.js
- pnpm

## Setup

```bash
pnpm install
npx prisma migrate dev
npx prisma db seed
```

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma

### DB Migration
```bash
npx prisma migrate dev
```

### DB Seed
```bash
npx prisma db seed
```

### Generate Prisma Client code
```bash
npx prisma generate
```
