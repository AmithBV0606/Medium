import  zod, { ParseStatus }  from "zod";

// Zod validation and type aliases for userRouter :

// Signup validation : 
export const signupInput = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
});

export type SignupInput = zod.infer<typeof signupInput>;

// Signin validation : 
export const signinInput = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
});

export type SigninInput = zod.infer<typeof signinInput>;

// ___________________________________________________________________________________

// Zod validation and type aliases for blogRouter :

// 1) Creating a blog validation : 
export const createBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
});

export type CreateBlogInput = zod.infer<typeof createBlogInput>;

// 2) Updating a blog validation : 
export const updateBlogInput = zod.object({
    id: zod.string(),
    title: zod.string().optional(),
    content: zod.string().optional(),
});

export type UpdateBlogInput = zod.infer<typeof updateBlogInput>;

// 3) Specific blog post validation : 