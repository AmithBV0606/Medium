import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function TopBar() {
  return (
    <div className="border-b flex justify-between items-center px-10 py-3">
      <div className="text-xl font-semibold cursor-pointer">
        <Link to={"/blogs"}>Medium</Link>
      </div>

      <div>
        <Avatar name="Amith" />
      </div>
    </div>
  );
}

export default TopBar;
