import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface BlogsPropType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  user: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogsPropType[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBlogs(response.data.blogs);
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
    blogs,
  };
};
