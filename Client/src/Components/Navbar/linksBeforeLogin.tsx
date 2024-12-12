import { Link } from "react-router-dom";

const LinkBefore = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <button className="bg-green-600 p-2 rounded-lg text-white cursor-pointer hover:bg-green-400 transition-all duration-200">
          <Link to={"/signup"}>Sign Up</Link>
        </button>
        <Link
          to={"/login"}
          className="font-bold hover:underline transition-all duration-300"
        >
          Log in
        </Link>
      </div>
    </>
  );
};

export default LinkBefore;
