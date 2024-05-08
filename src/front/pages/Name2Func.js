import { useState } from "react";
import gptName2FuncAPI from "../apis/gptAPIs";
import ConvertBtn from "../components/ConvertBtn";
import { PageName } from "../components/PageName";

function Name2Func() {
  let [inputName, setInputName] = useState("");
  let [inputFramework, setInputFramework] = useState("");
  let [inputEtc, setInputEtc] = useState("");

  let [result, setResult] = useState("");

  return (
    <div className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-2 w-full flex-shrink-0">
          <PageName PageName={"Name2Func"} />
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
              input={inputName}
              setResult={setResult}
              apiCall={gptName2FuncAPI}
            />
            <FuncOutput result={result} inputName={inputName} />
          </div>
        </div>
      </div>
    </div>
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
          handleChange={handleInputChange}
          inputValue={inputName}
          placeholder="함수 명"
        />
        <InputForm
          title="Framework"
          handleChange={handleInputFrameworkChange}
          inputValue={inputFramework}
          placeholder="사용 Framework"
        />
        <InputForm
          title="고려사항"
          handleChange={setInputEtcChange}
          inputValue={inputEtc}
          placeholder="기타 고려사항"
        />
      </div>
    </div>
  );
}

function InputForm({ title, handleChange, inputValue, placeholder }) {
  return (
    <div className="mt-2 flex place-items-center">
      <div className="w-32">{title}</div>
      <input
        type="text"
        name="price"
        id="price"
        className="block rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={handleChange}
        value={inputValue}
        placeholder={placeholder}
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
            <textarea
              type="text"
              name="price"
              id="price"
              className="block w-full min-h-32 rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="함수 명을 입력하고 버튼을 누르면 결과가 나옵니다."
              value={result}
              readOnly
            />
          </div>
          <span className="ml-12 mt-4 text-yellow-500">{`}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Name2Func;
