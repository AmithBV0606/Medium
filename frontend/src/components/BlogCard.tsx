import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <div className="border-b-2 text-slate-400 my-4">
      <div className="flex items-center gap-4 py-2">
        <div className="">
          <Avatar name={authorName} />
        </div>
        <div className="font-thin text-gray-500">{authorName}</div>
        <div className="text-slate-700">|</div>
        <div className="font-extralight pl-2 text-slate-500">
          {publishedDate}
        </div>
      </div>

      <Link to={`/blog/${id}`}>
        <div className="text-xl font-semibold text-slate-800">{title}</div>
      </Link>

      <div className="text-base font-light text-slate-600 mb-4">
        {content.slice(0, 200) + "......."}
      </div>

      <div className="text-slate-400 text-sm mb-2">{`${Math.ceil(
        content.length / 200
      )} min read`}</div>

      {/* <div className="bg-slate-200 h-[0.15rem] w-full" /> */}
    </div>
  );
}

export default BlogCard;