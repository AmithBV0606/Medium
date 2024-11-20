import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";
import { SignupInput } from "@amith_rao/medium-common";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import Loader from "./Loader";

type AuthType = {
  type: "signup" | "signin";
};

function CreateAccount({ type }: AuthType) {
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      setLoading(true)
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${
          type === "signup" ? "signup" : "signin"
        }`, postInput
      );
      const token = response.data.jwt;
      localStorage.setItem("token", token);
      navigate("/blog");
      setLoading(false)
    } catch (error) {
      alert("Error while Signing In/Signing Up");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-6">
            <div className="text-3xl font-extrabold px-6">
              {type === "signup" ? "Create an account" : "Login to Continue"}
            </div>

            <div className="text-slate-400 font-thin text-center mb-4">
              {type === "signin"
                ? "Don't have an account? "
                : "Already have an account? "}
              <Link
                to={type === "signin" ? "/signup" : "/signin"}
                className="underline"
              >
                {type === "signin" ? "Signup" : "Login"}
              </Link>
            </div>
          </div>

          <div>
            {type === "signup" ? (
              <Input
                type="text"
                label="Name"
                placeholder="Enter your name..."
                onChange={(e) => {
                  setPostInput((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
              />
            ) : null}

            <Input
              type="text"
              label="Email"
              placeholder="Enter your email address"
              onChange={(e) => {
                setPostInput((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
            />

            <Input
              type="password"
              label="Password"
              onChange={(e) => {
                setPostInput((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />

            <Button name={type === "signin" ? "Sign In" : "Sign Up"} onClick={sendRequest} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
