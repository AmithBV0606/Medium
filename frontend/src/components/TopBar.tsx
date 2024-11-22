import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import { BACKEND_URL } from "../config";
import axios from "axios";

type TopBarType = {
  type : "createBlogs" | "Publish";
  title? : string;
  content? : string;
}

function TopBar({ type, title, content }: TopBarType) {
  const navigate = useNavigate();

  const registerPost = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title,
        content
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      const data = response.data;
      const id = data.id;
      navigate(`/blog/${id}`);
    } catch (error) {
      alert("Error while posting the blog post, please try re-posting your blog!");
      navigate(`/publish`);
    }
  }

  return (
    <div className="border-b-2 flex justify-between items-center px-10 py-3">
      <div className="text-xl font-semibold cursor-pointer">
        <Link to={"/blogs"}>Medium</Link>
      </div>

      <div className="flex justify-center items-start gap-10">
        {type === "createBlogs" ? (
          <Link to={"/publish"}>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Create blog
            </button>
          </Link>
        ) : null}

        {type === "Publish" ? (
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={registerPost}
          >
            Publish post
          </button>
        ) : null}

        <Avatar name="Amith" />
      </div>
    </div>
  );
}

export default TopBar;
