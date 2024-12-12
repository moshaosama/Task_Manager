import { FaArrowLeft } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CheckLogin = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center absolute top-0 bg-[rgba(0,0,0,0.5)]">
        <div className="bg-white w-96 h-96 rounded-2xl flex flex-col gap-10 justify-center items-center">
          <div>
            <p className="text-xl font-bold"> Please Log in First</p>
          </div>
          <div className="flex justify-around w-full mx-36">
            <button className="flex items-center gap-2 hover:underline">
              <FaArrowLeft /> Back
            </button>
            <button className="hover:underline">
              <Link to={"/login"} className="flex items-center gap-1">
                <FaPerson /> Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckLogin;
