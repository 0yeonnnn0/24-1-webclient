function UserLoggedIn() {
  const logout = async () => {
    await signOut(auth);
  }; // 🔥 4

  return (
    <div>
      <h4> User Logged In: </h4>
      {user?.email}
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}
export default UserLoggedIn;
