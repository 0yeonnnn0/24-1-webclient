import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function ConvertBtn({ input, setResult, apiCall }) {
  return (
    <button
      className="w-56 rounded-md bg-green-800 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
      onClick={() => apiCall({ input, setResult })}
    >
      <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
      <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
      Convert
      <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
      <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
    </button>
  );
}

export default ConvertBtn;
