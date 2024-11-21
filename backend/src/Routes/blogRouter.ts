import { Hono } from "hono";
import authMiddleware from "../Middlewares/authMiddleware";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@amith_rao/medium-common";

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", authMiddleware);

// 1) Creating a blog post :
blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid input",
    });
  }

  const authorId = c.get("userId");

  const createBlogPost = await prisma.post.create({
    data: {
      authorId: authorId,
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    id: createBlogPost.id,
    message: "Blog created successfully!!",
  });
});

// 2) To update the existing blog post :
blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid input",
    });
  }

  const updateBlogPost = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body?.title,
      content: body?.content,
    },
  });

  return c.json({
    id: updateBlogPost.id,
    message: "Blog updated successfully!",
  });
});

// 3) To get all the blog post :

// Feature to add : pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blogs
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    c.status(500);
    return c.json({ message: "Internal Server Error" });
  }
});

// 4) To get the specific blog post :
blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");

  try {
    const getBlogPost = await prisma.post.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        user: {
          select:{
            name:true
          }
        }
      }
    });

    return c.json({
      getBlogPost,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while fetching blog post",
    });
  }
});

export default blogRouter;