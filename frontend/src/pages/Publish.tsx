import { useState } from "react";
import TopBar from "../components/TopBar";

function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <TopBar type={"Publish"} title={title} content={content}/>
      <div className="border-2 border-slate-200 m-2 p-4 rounded-xl">
        <div className="mb-6 flex flex-col justify-center items-start max-w-6xl">
          <label
            htmlFor="title"
            className="block mb-2 text-3xl font-bold text-gray-900"
          >
            Title :
          </label>

          <input
            type="text"
            id="title"
            className="block w-full p-4 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-3xl font-bold text-gray-900"
          >
            Content :
          </label>
          <textarea
            id="message"
            rows={20}
            className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your thoughts here..."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Publish;
