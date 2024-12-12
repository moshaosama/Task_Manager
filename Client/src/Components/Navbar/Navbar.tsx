import LinksAfetr from "./linksAfterLogin";
import LinkBefore from "./linksBeforeLogin";
const Navbar = () => {
  const User = JSON.parse(localStorage.getItem("user")!);
  return (
    <>
      <div className="bg-[#e0e0e0] py-5 shadow-xl  rounded-b-lg">
        <div className="flex justify-between items-center  mx-16 max-sm:mx-4">
          <div>
            <h1 className="text-3xl font-extrabold max-sm:text-lg">
              <span>Task</span>
              <span className="mx-5">Mo4a</span>
            </h1>
          </div>
          {User ? <LinksAfetr /> : <LinkBefore />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
