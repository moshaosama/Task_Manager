import { Link } from "react-router-dom";
import Account from "../Components/Account";
import BtnForm from "../Components/BtnForm";
import FormAccount from "../Components/FormAccount";

const SignUp = () => {
  return (
    <div className="flex justify-center max-sm:mx-5">
      <div className="bg-[#e0e0e0] w-[70pc]  my-12 p-5 rounded-lg shadow-lg">
        <Account Title="Create" />
        <div className="flex flex-col gap-3 my-5">
          <FormAccount
            Label={"Full Name"}
            Type={"text"}
            placeHolder={"Full Name"}
          />
          <FormAccount
            Label={"Email Address"}
            Type={"email"}
            placeHolder={"Email Address"}
          />
          <FormAccount
            Label={"Password"}
            Type={"password"}
            placeHolder={"Password"}
          />
          <BtnForm BtnValue="Sign Up" />
          <p>
            Don't have an account?{" "}
            <Link
              to={"/"}
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
