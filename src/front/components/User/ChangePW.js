import { updatePassword } from "firebase/auth";

function ChangePW({ user, newPassword, setNewPassword }) {
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
    <div>
      <h4>Change Password</h4>
      <input
        placeholder="NewPassword..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />
      <button onClick={handleNewPassword}> New Password </button>
    </div>
  );
}

export default ChangePW;
