import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

// Signup Route :
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
    // The type of c.env.DATABASE_URL will be unknown to the typescript, that's why we have to include the type of (c.env.DATABASE_URL) to the context(c).
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({
      jwt: token,
    });
  } catch (e) {
    c.status(403);
    return c.text(`User with email : ${body.email} already exists!!`);
  }
});

// Signin Route :
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "Incorrect credentials!" });
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({
    jwt: token,
  });
});

export default userRouter;