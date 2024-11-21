import BlogCard from "../components/BlogCard";
import SkeletonLoader1 from "../Loaders/SkeletonLoader1";
import TopBar from "../components/TopBar";
import { useBlogs } from "../hooks/useBlogs";

const convertDate = (time: string) => {
  const date = new Date(time);
  const formattedDate = date.toLocaleDateString("en-GB"); 
  return formattedDate;
}

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <SkeletonLoader1 />;
  }

  return (
    <div className="bg-gray-50">
      <TopBar />
      
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