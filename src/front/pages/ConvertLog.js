import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageName } from "../components/PageName";
import { TabComponent } from "./Mypage";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ConvertLog() {
  return (
    <div className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-2 px-24 w-full flex-shrink-0">
          <PageName PageName={"ConvertLog"} />

          <div className="px-10">
            <TabComponent />
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchForm() {
  return (
    <form className="flex justify-center">
      <input type="text" className="border-2 rounded w-96 h-10" />
      <button type="submit" className="-m-8">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}

export default ConvertLog;
