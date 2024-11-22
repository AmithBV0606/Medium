import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface BlogPropType {
    id: string;
  title: string;
  content: string;
  createdAt: string;
  user: {
    name: string;
  };
}

export const useBlog = ({ id }: {id: string}) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [blog, setBlog] = useState<BlogPropType>();
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          setBlog(response.data.getBlogPost);
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