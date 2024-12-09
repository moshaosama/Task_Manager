import { formAccount } from "../interface";

const FormAccount = ({ Label, Type, placeHolder }: formAccount) => {
  return (
    <>
      <p className="flex flex-col gap-2 my-2">
        <label htmlFor={Label} className="font-bold mx-2">
          {Label}
        </label>
        <input
          type={Type}
          id={Label}
          placeholder={placeHolder}
          className="p-3 rounded-xl shadow-sm"
        />
      </p>
    </>
  );
};

export default FormAccount;
