import { useState } from "react";
import ConvertBtn from "../components/ConvertBtn";
import gptFunc2NameAPI from "../apis/gptAPIs";
import { PageName } from "../components/PageName";

function Func2Name() {
  let [input, setInput] = useState("");
  let [result, setResult] = useState();

  return (
    <div className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-2 w-full flex-shrink-0">
          <PageName PageName={"Func2Name"} />
          <div className="Func2Name rounded-2xl mt-5 bg-gray-800 text-gray-400 p-10 text-center ring-1 ring-inset ring-gray-900/5 justify-center font-bold">
            <FuncInput input={input} setInput={setInput} />
            <ConvertBtn
              input={input}
              setResult={setResult}
              apiCall={gptFunc2NameAPI}
            />
            <FuncNameOutput result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FuncInput({ input, setInput }) {
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="text-3xl mt-1 text-purple-600">function</div>
          <div className="text-3xl mt-1 text-cyan-600">Name</div>
          <div className="text-3xl mt-1 text-yellow-500">{`() {`}</div>
        </div>
        <div className="flex flex-col items-start justify-start text-3xl mt-1">
          <div className="relative ml-12 mt-2 w-10/12 rounded-md shadow-sm">
            <textarea
              type="text"
              name="price"
              id="price"
              className="block w-full min-h-32 rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="함수를 입력해 주세요."
              onChange={handleInputChange}
              value={input}
            />
          </div>
          <span className="ml-12 mt-4 text-yellow-500">{`}`}</span>
        </div>
      </div>
    </div>
  );
}

function FuncNameOutput({ result }) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="text-3xl mt-1 text-purple-600">function</div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className="block min-w-52 max-w-80 w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
              placeholder="결과가 곧 나옵니다."
              value={result}
            />
          </div>
          <div className="text-3xl mt-1 text-yellow-500">{`() {`}</div>
        </div>
        <div className="inline-flex flex-col items-start justify-start text-3xl mt-1">
          <div>
            <span className="ml-12 text-cyan-400">{`return `}</span>
            <span className="ml-2 text-purple-600">{`(`}</span>
          </div>
          <div>
            <span className="ml-20 text-cyan-400">{`<`}</span>
            <span className="text-rose-700">{`div`}</span>
            <span className="text-cyan-400">{`>`}</span>
            <br />
            <span className="ml-20">{`...`}</span>
            <br />
            <span className="ml-20 text-cyan-400">{`</`}</span>
            <span className="text-rose-600">{`div`}</span>
            <span className="text-cyan-400">{`>`}</span>
          </div>
          <div>
            <span className="ml-12 text-purple-600">{`)`}</span>
            <span className="text-yellow-500">{`}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Func2Name;
