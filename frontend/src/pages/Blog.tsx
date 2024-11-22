import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import SkeletonLoader2 from "../Loaders/SkeletonLoader2";
import FullBlog from "../components/FullBlog";
import TopBar from "../components/TopBar";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading || !blog) {
    return <div>
        <TopBar />
    
        <div className="h-screen flex flex-col justify-start mt-14">
            
            <div className="flex justify-center">
                <SkeletonLoader2 />
            </div>
        </div>
    </div>
}

  return <div><FullBlog blog={blog}/></div>;
}

export default Blog;