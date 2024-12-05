import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      alert("You cannot access this page while logged in."); // Notify the user
    }
  }, []);

  if (token) {
    return <Navigate to={"/blogs"} replace />;
  }

  return children;
};

export default AuthenticatedRoute;