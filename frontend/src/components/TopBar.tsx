import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import { BACKEND_URL } from "../config";
import axios from "axios";

type TopBarType = {
  type: "createBlogs" | "Publish";
  title?: string;
  content?: string;
};

function TopBar({ type, title, content }: TopBarType) {
  const navigate = useNavigate();

  const registerPost = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = response.data;
      const id = data.id;
      navigate(`/blog/${id}`);
    } catch (error) {
      alert(
        "Error while posting the blog post, please try re-posting your blog!"
      );
      navigate(`/publish`);
    }
  };

  return (
    <div className="border-b-2 flex justify-between items-center px-10 py-3">
      <div className="text-4xl font-semibold cursor-pointer flex items-center gap-4">
        <img src="/favicon-32x32.png" alt="icon" className="w-10 h-10" />
        <Link to={"/blogs"}>Scribe</Link>
      </div>

      <div className="flex justify-center items-start gap-4">
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

        <button
          type="button"
          className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </button>

        <Avatar name="Amith" />
      </div>
    </div>
  );
}

export default TopBar;
