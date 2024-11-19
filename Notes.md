# Medium

### Backend : 

1. **Hono for backend.**

- Initialize a hono based cloudflare worker app 

```bash
npm create hono@latest
```
- Target directory › backend

- Which template do you want to use? - cloudflare-workers

- Do you want to install project dependencies? … yes
Which package manager do you want to use? › npm (or yarn or bun, doesnt matter)

2. **Neondb for Postgres Database provider.**

    Get your connection url from neon.db :
    - Link : https://console.neon.tech/app/projects

**NOTE :** After signing up you'll have to create a project by giving the project name and the location(Ex : AWS East Ohaio) where you want to host your database. After creating the project you will receive the connection string.

3. **Prisma Accelerate for connection pool.**

    Get connection pool URL from Prisma accelerate
    - Link : https://www.prisma.io/data-platform/accelerate

**NOTE :** During the creation of connection pool in prisma accelerate, you'll have to provide the neondb postgres database connection string. That way the connection pool will be connected to the service provider where you're database is present.

Also you have to make sure that the location, your database is hosted should be same as the connection pools hosting location.

After the creation of the connection pool, you will get the `DATABASE_URL`, which you will paste in wangler.toml file in your project. 

4. **Prisma ORM** : Initialize prisma in your project

```bash
npm i prisma
npx prisma init
```

5. **Changes in .env and wrangler.toml file :**

- Step 1 : Inside .env file, replace the existing `DATABASE_URL` with the connection string received from the neondb

- Step 2 : Inside the wrangler.toml file, below `[vars]`, paste the `DATABASE_URL` you received from the connection pool in prisma accelerate.

**NOTE :** The `DATABASE_URL` in `.env` file will be utilized by CLI to generate prisma migrations, while the `DATABASE_URL` in `wrangler.toml` file will be utilized by your backend application and cloudflare workers, whenever the app is deployed.

6. **Initialize the schema :**

```ts
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id       String   @id @default(uuid())
  email    String   @unique
  name     String?
  password String
  posts    Post[]
}

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}
```

7. **Migrate your database :**

```bash
npx prisma migrate dev --name init_schema
```

8. **Generate the prisma client :**

```bash
npx prisma generate --no-engine
```

**NOTE :** The flag `--no-engine` is very important as the things that are very specific to Node.js might not work in the cloudflare workers environment.

9. **Add the accelerate extension :**

```ts
npm install @prisma/extension-accelerate
```

10. **Initialize the prisma client** :

```ts
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())
``` 