import { Link } from "react-router-dom";

function Header({ user }) {
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  return (
    <header className=" block h-20 top-0 z-50">
      <div className="absolute bg-gray-800 inset-x-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-row gap-9 items-center">
            <div className="flex md:flex-1 lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>

            <div className="flex gap-x-12">
              <Link
                to="/about"
                className="font-semibold leading-6 text-gray-300"
              >
                About
              </Link>
              <Link
                to="/func2name"
                className="font-semibold leading-6 text-gray-300"
              >
                Func2Name
              </Link>
              <Link
                to="/name2func"
                className=" font-semibold leading-6 text-gray-300"
              >
                Name2Func
              </Link>
              <Link
                to="/convert-log"
                className=" font-semibold leading-6 text-gray-300"
              >
                ConvertLog
              </Link>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-7 items-center">
            {user ? (
              <>
                <Link
                  to="/mypage"
                  className="font-semibold leading-6 text-gray-300"
                >
                  {user.username || "사용자명"}
                </Link>
                <Link
                  className="font-semibold leading-6 text-gray-300 border border-gray-300 rounded-md px-2 py-1 cursor-pointer"
                  onClick={() => logout()}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-gray-300"
                >
                  Sign in
                </Link>

                <Link
                  to="/signup"
                  className="font-semibold leading-6 text-gray-300 border border-gray-300 rounded-md px-2 py-1"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
