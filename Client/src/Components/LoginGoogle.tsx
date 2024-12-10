import { FcGoogle } from "react-icons/fc";

const LoginGoogle = () => {
  return (
    <>
      <div className="flex items-center gap-3 justify-center bg-[#b9b9b9] shadow-lg p-3 rounded-xl cursor-pointer hover:bg-[#d1d1d1] transition-all duration-200">
        <FcGoogle className="text-xl" />
        <p className="text-white font-bold ">Continue with Google</p>
      </div>
    </>
  );
};

export default LoginGoogle;
