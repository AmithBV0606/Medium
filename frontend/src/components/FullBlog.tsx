import { BlogPropType } from "../hooks/useBlog";
import { convertDate } from "../pages/Blogs";
import Avatar from "./Avatar";
import TopBar from "./TopBar";

function FullBlog({ blog }: { blog: BlogPropType }) {
  return (
    <div>
      <TopBar  type="createBlogs"/>
      <div className="grid grid-cols-12 px-32 w-full mt-14">
        <div className="col-span-8 space-y-2 px-4">
          <div className="text-4xl font-bold">{blog.title}</div>

          <div className="text-lg text-gray-500">
            Posted on {convertDate(blog.createdAt)}
          </div>

          <div className="text-lg leading-8">{blog.content}</div>
        </div>

        <div className="bg-slate-200 max-h-48 py-4 px-2 rounded-lg col-span-4 flex flex-col gap-6">
          Author Info

          <div className="flex space-x-3">
            <Avatar name={blog.user.name} />

            <div className="max-w-[20rem] text-lg font-bold">
              {blog.user.name}
              <div className="text-base font-light text-gray-600">
                Random catch phrase about author's ability to grab user's
                attention.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;
