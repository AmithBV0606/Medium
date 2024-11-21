import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface BlogPropType {
    id: string;
  title: string;
  content: string;
  createdAt: string;
  user: {
    name: string;
  };
}

interface IdPropType {
    id: string;
}

export const useBlog = ({ id }: IdPropType) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogPropType>();
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(`${BACKEND_URL}/api/v1/blog/:${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          setBlog(response.data.blogs);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching blogs:", error);
          setLoading(false);
        }
      };
  
      fetchBlogs();
    }, []);
  
    return {
      loading,
      blog,
    };
}