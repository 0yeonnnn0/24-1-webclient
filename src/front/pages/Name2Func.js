import { useState } from "react";
import { gptName2FuncAPI } from "../apis/gptAPIs";
import { PageName } from "../components/PageName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Loading from "../components/Loading";

function Name2Func({ loading, setLoading }) {
  let [inputName, setInputName] = useState("");
  let [inputFramework, setInputFramework] = useState("");
  let [inputEtc, setInputEtc] = useState("");

  let [result, setResult] = useState("");

  return (
    <div className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-2 w-full flex-shrink-0">
          <PageName PageName={"Name2Func"} />
          {loading && <Loading />}
          <div className="Name2Func mt-5 rounded-2xl bg-gray-800 text-gray-400 p-10 text-center ring-1 ring-inset ring-gray-900/5 justify-center font-bold">
            <FuncNameInput
              input={inputName}
              setInput={setInputName}
              inputFramework={inputFramework}
              setInputFramework={setInputFramework}
              inputEtc={inputEtc}
              setInputEtc={setInputEtc}
            />
            <ConvertBtn
              inputName={inputName}
              inputFramework={inputFramework}
              inputEtc={inputEtc}
              setResult={setResult}
              setLoading={setLoading}
            />
            <FuncOutput result={result} inputName={inputName} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConvertBtn({
  inputName,
  inputFramework,
  inputEtc,
  setResult,
  setLoading,
}) {
  function getAPI(inputName, inputFramework, inputEtc) {
    setLoading(true);
    try {
      let apiResult = gptName2FuncAPI(inputName, inputFramework, inputEtc);
      apiResult.then((res) => {
        setResult(res);
        setLoading(false);
      });
    } catch {
      console.error("API 호출 에러");
      setLoading(false);
    }
  }
  return (
    <button
      className="w-56 mt-8 rounded-md bg-green-800 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
      onClick={() => getAPI(inputName, inputFramework, inputEtc)}
    >
      <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
      <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
      Convert
      <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
      <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
    </button>
  );
}

function FuncNameInput({
  inputName,
  setInput,
  inputFramework,
  setInputFramework,
  inputEtc,
  setInputEtc,
}) {
  const handleInputChange = (event) => {
    setInput(event.target.value); // 입력된 값으로 상태를 업데이트합니다.
  };
  const handleInputFrameworkChange = (event) => {
    setInputFramework(event.target.value); // 입력된 값으로 상태를 업데이트합니다.
  };
  const setInputEtcChange = (event) => {
    setInputEtc(event.target.value); // 입력된 값으로 상태를 업데이트합니다.
  };

  return (
    <div>
      <div className=" bg-gray-800">
        <InputForm
          title="Function Name"
          name="name"
          handleChange={handleInputChange}
          inputValue={inputName}
        />
        <InputForm
          title="Framework"
          name="framework"
          handleChange={handleInputFrameworkChange}
          inputValue={inputFramework}
        />
        <InputForm
          title="고려사항"
          name="etc"
          handleChange={setInputEtcChange}
          inputValue={inputEtc}
        />
      </div>
    </div>
  );
}

function InputForm({ title, name, handleChange, inputValue }) {
  return (
    <div className="mt-2 flex place-items-center">
      <div className="min-w-32 text-right pr-5">{title}</div>
      <input
        type="text"
        name={name}
        className="block w-1/2 h-9 rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-6"
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  );
}

function FuncOutput({ result, inputName }) {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="flex flex-row gap-2">
          <div className="text-3xl mt-1 text-purple-600">function</div>
          <div className="text-3xl mt-1 text-cyan-600">
            {inputName || "Name"}
          </div>
          <div className="text-3xl mt-1 text-yellow-500">{`() {`}</div>
        </div>
        <div className="flex flex-col items-start justify-start text-3xl mt-1">
          <div className="relative ml-12 mt-2  w-10/12 rounded-md shadow-sm">
            <pre>
              <code
                className="block w-full overflow-x-auto min-h-32 rounded-md border-0 py-1.5 pl-3 pr-3 text-left bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                placeholder="함수 명을 입력하고 버튼을 누르면 결과가 나옵니다."
              >
                {result}
              </code>
            </pre>
          </div>
          <span className="ml-12 mt-4 text-yellow-500">{`}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Name2Func;
