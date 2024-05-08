import { updatePassword } from "firebase/auth";
import { useState } from "react";

function ChangePW({ user }) {
  const [newPassword, setNewPassword] = useState("");

  const handleNewPassword = async () => {
    // 🔥 6
    try {
      if (user) {
        updatePassword(user, newPassword);
      } else {
        alert("로그인 하세요.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 p-10 flex justify-center">
        <span>Change Password</span>
        <input
          className="border rounded-lg border-gray-300 p-2 h-10"
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
        />
        <button
          onClick={handleNewPassword}
          className="bg-green-800 text-base font-semibold hover:bg-green-600 h-10 border border-bg-green-950 rounded text-white"
        >
          {" "}
          New Password{" "}
        </button>
      </div>
    </div>
  );
}

export default ChangePW;
