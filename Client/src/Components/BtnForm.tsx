import { btnForm } from "../interface";

const BtnForm = ({ BtnValue }: btnForm) => {
  return (
    <>
      <button className="bg-green-600 p-2 my-3 text-xl text-white font-bold rounded-lg shadow-md hover:bg-green-300 transition-all duration-200">
        {BtnValue}
      </button>
    </>
  );
};

export default BtnForm;
