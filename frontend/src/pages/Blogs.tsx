import BlogCard from "../components/BlogCard";
import SkeletonLoader1 from "../Loaders/SkeletonLoader1";
import TopBar from "../components/TopBar";
import { useBlogs } from "../hooks/useBlogs";

export const convertDate = (time: string) => {
  const date = new Date(time);
  const options = { month: "short", day: "2-digit", year: "numeric" };
  // @ts-ignore
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <TopBar type={"createBlogs"}/>
        <SkeletonLoader1 />
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <TopBar type={"createBlogs"}/>

      <div className="flex justify-center">
        <div className="mx-6 md:max-w-4xl">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.user.name}
              title={blog.title}
              content={blog.content}
              publishedDate={convertDate(blog.createdAt)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
