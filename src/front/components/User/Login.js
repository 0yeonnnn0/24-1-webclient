import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";

function Login({ setLoginEmail, loginEmail, loginPassword, setLoginPassword }) {
  return (
    <div className="flex flex-col gap-4 w-96 p-5">
      <h3 className=" text-3xl mb-6">
        {" "}
        Sign in to <br /> Function Converter{" "}
      </h3>
      <LoginBox
        setLoginEmail={setLoginEmail}
        setLoginPassword={setLoginPassword}
        loginEmail={loginEmail}
        loginPassword={loginPassword}
      />
      <div className="bg-white border rounded h-20 p-4 text-center">
        <span>New to Function Converter?</span>
        <br />
        <Link to="/signup" className="h-10 rounded ml-1 text-blue-600">
          ➡️ Create an account
        </Link>
      </div>
    </div>
  );
}

function LoginBox({
  setLoginEmail,
  setLoginPassword,
  loginEmail,
  loginPassword,
}) {
  const login = async () => {
    // 🔥 2
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col gap-3 bg-gray-200 p-4 border rounded-lg border-gray-300">
      <span className="">Email address</span>
      <input
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
        className="border rounded-lg border-gray-300 p-2 h-10"
      />
      <div className="flex justify-between">
        <span className="">Password</span>
        <a
          className="text-blue-600 hover:decoration-solid text-sm mt-1"
          href="/changePW"
        >
          Forget Password?
        </a>
      </div>
      <input
        type="password"
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
        className="border rounded-lg border-gray-300 p-2 h-10"
      />
      <div className="flex flex-col gap-4 mt-4">
        <button
          onClick={login}
          className=" bg-green-800 text-base font-semibold hover:bg-green-600 h-10 border border-bg-green-950 rounded text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
