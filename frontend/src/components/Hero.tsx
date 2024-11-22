import React from "react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 text-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Manage Your Blog with Ease
            </h1>

            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Create, update, and delete your blog posts effortlessly with our
              intuitive platform.
            </p>
          </div>

          <div className="space-x-4">
            <Link
              to={"/signup"}
              className="bg-gray-200 border-gray-200 text-black px-6 py-4 rounded hover:bg-gray-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
