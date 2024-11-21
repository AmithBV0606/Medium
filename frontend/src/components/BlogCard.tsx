import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
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
        <div className="font-extralight pl-2 text-slate-500">{publishedDate}</div>
      </div>

      <div className="text-xl font-semibold text-slate-800">{title}</div>

      <div className="text-base font-light text-slate-600">{content.slice(0, 200) + "......."}</div>

      <div className="text-slate-400 text-sm">{`${Math.ceil(content.length / 100)} min read`}</div>

      {/* <div className="bg-slate-200 h-[0.15rem] w-full" /> */}
    </div>
  );
}

export default BlogCard;
