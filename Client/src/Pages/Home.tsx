import { useEffect, useState } from "react";
import CheckLogin from "../Components/CheckLogin";
import Navbar from "../Components/Navbar/Navbar";
import { MdDelete, MdEdit } from "react-icons/md";
import { Lists } from "../interface";

const Home = () => {
  const User = JSON.parse(localStorage.getItem("user")!);
  const [lists, setLists] = useState<Lists | null>(null);
  const [Title, setTitle] = useState<string>("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/lists")
      .then((res) => {
        return res.json();
      })
      .then((data) => setLists(data));
  }, []);

  function DeleteList(el: string) {
    fetch(`http://127.0.0.1:8000/lists/${el}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: Title,
      }),
    }).then((res) => {
      return res.json();
    });
  }

  function createList() {
    fetch("http://127.0.0.1:8000/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: Title,
      }),
    }).then((res) => {
      return res.json();
    });
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col  items-center">
        <div className="flex items-center gap-3">
          <div>
            <input
              type="text"
              className="bg-[#ddd] w-64 my-10 p-3 rounded-xl focus-visible:w-96 transition-all duration-500"
              placeholder="Enter Your Text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </div>

          <div>
            <button
              className="bg-green-600 p-3 rounded-xl hover:bg-green-400 transition-all duration-200"
              style={
                User ? undefined : { userSelect: "none", pointerEvents: "none" }
              }
              disabled={User ? false : true}
              onClick={createList}
            >
              Add Task
            </button>
          </div>
        </div>
        {lists?.data.length === 0 ? (
          <>
            <p className="text-red-500 text-3xl font-bold">
              You Don't have any Lists
            </p>
          </>
        ) : (
          <>
            {lists?.data.map((el) => {
              return (
                <>
                  <div
                    key={el.id}
                    className="bg-[#e0e0e0] w-96 max-sm:w-80 p-3 rounded-xl font-bold flex justify-between items-center my-1"
                  >
                    <div>
                      <p>- {el.Title}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <MdEdit className="text-gray-600 text-2xl cursor-pointer  hover:text-gray-400 transition-all duration-200" />
                      <MdDelete
                        className="text-red-600 text-2xl cursor-pointer hover:text-red-300 transition-all duration-200"
                        onClick={() => DeleteList(el.Title)}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>

      {User ? null : <CheckLogin />}
    </>
  );
};

export default Home;
