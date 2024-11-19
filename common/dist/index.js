"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
// Zod validation and type aliases for userRouter :
// Signup validation : 
exports.signupInput = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
// Signin validation : 
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
// ___________________________________________________________________________________
// Zod validation and type aliases for blogRouter :
// 1) Creating a blog validation : 
exports.createBlogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
// 2) Updating a blog validation : 
exports.updateBlogInput = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional(),
});
// 3) Specific blog post validation : 
