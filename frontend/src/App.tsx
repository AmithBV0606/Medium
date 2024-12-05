import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthenticatedRoutes>
                <Home />
              </AuthenticatedRoutes>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthenticatedRoutes>
                <Signup />
              </AuthenticatedRoutes>
            }
          />
          <Route
            path="/signin"
            element={
              <AuthenticatedRoutes>
                <Signin />
              </AuthenticatedRoutes>
            }
          />

          <Route
            path="/blog/:id"
            element={
              <ProtectedRoutes>
                <Blog />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/blogs"
            element={
              <ProtectedRoutes>
                <Blogs />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/publish"
            element={
              <ProtectedRoutes>
                <Publish />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;