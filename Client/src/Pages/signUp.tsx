import { Link } from "react-router-dom";
import Account from "../Components/Account";
import BtnForm from "../Components/BtnForm";
import FormAccount from "../Components/FormAccount";
import { useState } from "react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  return (
    <div className="flex justify-center max-sm:mx-5">
      <div className="bg-[#e0e0e0] w-[70pc]  my-12 p-5 rounded-lg shadow-lg">
        <Account Title="Create" />
        <div className="flex flex-col gap-3 my-5">
          <FormAccount
            Label={"Full Name"}
            Type={"text"}
            placeHolder={"Full Name"}
            onChange={(e) => setFullName(e.target.value)}
          />
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
            BtnValue="Sign Up"
            onClick={() => {
              return fetch("http://127.0.0.1:8000/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userName: fullName,
                  Email: Email,
                  Password: Password,
                }),
              }).then((res) => {
                return res.json();
              });
            }}
          />
          <p>
            Don't have an account?{" "}
            <Link
              to={"/login"}
              className="text-green-600 font-bold text-lg hover:underline hover:text-green-400 duration-200 transition-all"
            >
              Log in
            </Link>{" "}
            now
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
