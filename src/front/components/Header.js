import { useState } from "react";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  let [modal, setModal] = useState(false);

  return (
    <header className="bg-gray-800 block absolute inset-x-0 top-0 z-50">
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
            <a href="/about" className="font-semibold leading-6 text-gray-300">
              About
            </a>
            <a
              href="/func2name"
              className="font-semibold leading-6 text-gray-300"
            >
              Func2Name
            </a>
            <a
              href="/name2func"
              className=" font-semibold leading-6 text-gray-300"
            >
              Name2Func
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-end gap-7 items-center">
          <a href="/login" className="font-semibold leading-6 text-gray-300">
            Sign in
          </a>

          <a
            href="/signup"
            className="font-semibold leading-6 text-gray-300 border border-gray-300 rounded-md px-2 py-1"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
