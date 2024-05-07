import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";

function RegisterUser({
  registerEmail,
  setRegisterEmail,
  registerPassword,
  setRegisterPassword,
}) {
  return (
    <div className="flex flex-col gap-4 w-96 p-5">
      <h3 className=" text-3xl mb-6">
        {" "}
        Welcome to <br /> Function Converter!{" "}
      </h3>
      <SignUpBox
        registerEmail={registerEmail}
        registerPassword={registerPassword}
        setRegisterEmail={setRegisterEmail}
        setRegisterPassword={setRegisterPassword}
      />

      <div className="bg-white border rounded h-20 p-4 text-center">
        <span>You have account?</span>
        <br />
        <Link to="/login" className="h-10 rounded ml-1 text-blue-600">
          ➡️ Sign in
        </Link>
      </div>
    </div>
  );
}

function SignUpBox({
  registerEmail,
  registerPassword,
  setRegisterEmail,
  setRegisterPassword,
}) {
  const register = async () => {
    // 🔥 1
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-gray-200 p-4 border rounded-lg border-gray-300">
      <SignUpInputForm title="Email" setFunction={setRegisterEmail} />
      <span className="">Birth</span>
      <input
        type="date"
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
        className="border rounded-lg border-gray-300 p-2 h-10"
      />
      <SignUpInputForm title="Password" setFunction={setRegisterPassword} />
      <SignUpInputForm title="Confirm" setFunction={setRegisterPassword} />
      <div className="flex flex-col gap-4 mt-4">
        <button
          onClick={register}
          className=" bg-green-800 text-base font-semibold hover:bg-green-600 h-10 border border-bg-green-950 rounded text-white"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

function SignUpInputForm({ title, setFunction }) {
  return (
    <div className="flex flex-col">
      <span className="">{title}</span>
      <input
        onChange={(event) => {
          setFunction(event.target.value);
        }}
        className="border rounded-lg border-gray-300 p-2 h-10"
      />
    </div>
  );
}
export default RegisterUser;
