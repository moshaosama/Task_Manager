const LinksAfetr = () => {
  const User = JSON.parse(localStorage.getItem("user")!);
  function handleClick() {
    localStorage.clear();
  }
  return (
    <div>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold max-sm:text-sm">
          Hello {User.data.userName}
        </h1>
        <button
          className="bg-green-600 p-2 rounded-lg text-white cursor-pointer hover:bg-green-400 transition-all duration-200"
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LinksAfetr;
