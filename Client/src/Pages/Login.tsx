import { Link } from "react-router";
import Account from "../Components/Account";
import BtnForm from "../Components/BtnForm";
import FormAccount from "../Components/FormAccount";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  return (
    <>
      <div className="flex justify-center max-sm:mx-5">
        <div className="bg-[#e0e0e0] w-[70pc]  my-12 p-5 rounded-lg shadow-lg">
          <Account Title="Log in" />
          <div className="flex flex-col gap-3 my-5">
            <FormAccount
              Label={"Email Address"}
              Type={"email"}
              placeHolder={"Email Address"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormAccount
              Label={"Password"}
              Type={"password"}
              placeHolder={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <BtnForm
              BtnValue="Log in"
              onClick={() => {
                return fetch("http://127.0.0.1:8000/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    Email: Email,
                    Password: Password,
                  }),
                })
                  .then((res) => {
                    return res.json();
                  })
                  .then((data) => {
                    localStorage.setItem("user", JSON.stringify(data));
                    localStorage.setItem("Jwt", data?.Token);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            />
            <div className="flex justify-between items-center">
              <p>
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="text-green-600 font-bold text-lg hover:underline hover:text-green-400 duration-200 transition-all"
                >
                  Sign Up
                </Link>
                now
              </p>
              <p>
                <Link
                  to={"/"}
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaArrowLeft /> Back
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
