import { btnForm } from "../interface";

const BtnForm = ({ BtnValue, onClick }: btnForm) => {
  return (
    <>
      <button
        className="bg-green-600 p-2 my-3 text-xl text-white font-bold rounded-lg shadow-md hover:bg-green-300 transition-all duration-200"
        onClick={onClick}
      >
        {BtnValue}
      </button>
    </>
  );
};

export default BtnForm;
