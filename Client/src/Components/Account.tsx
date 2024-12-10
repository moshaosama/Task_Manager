import { account } from "../interface";
import LoginGoogle from "./LoginGoogle";

const Account = ({ Title }: account) => {
  return (
    <>
          <h1 className="font-bold text-3xl">TaskMo4a</h1>
          <div className="my-10">
            <p className="text-xl">{Title} your account</p>
            <p>
              Unlock exclusive perks - Sign up now for early access and special
              offers!
            </p>
          </div>
          <LoginGoogle />
    </>
  );
};

export default Account;
