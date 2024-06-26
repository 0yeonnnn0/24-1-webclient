import { useState } from "react";
import { gptFunc2NameAPI } from "../apis/gptAPIs";
import { PageName } from "../components/PageName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useEffect } from "react";
import Loading from "../components/Loading";

function Func2Name({ loading, setLoading }) {
  let [input, setInput] = useState("");
  let [result, setResult] = useState();

  return (
    <div className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-2 w-full flex-shrink-0">
          <PageName PageName={"Func2Name"} />
          {loading && <Loading />}
          <div className="Func2Name rounded-2xl mt-5 bg-gray-800 text-gray-400 p-10 text-center ring-1 ring-inset ring-gray-900/5 justify-center font-bold">
            <FuncInput input={input} setInput={setInput} result={result} />
            <ConvertBtn
              inputFunction={input}
              setResult={setResult}
              setLoading={setLoading}
            />
            <FuncNameOutput result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ConvertBtn({ inputFunction, setResult, setLoading }) {
  function getAPI(inputFunction) {
    try {
      setLoading(true);
      let apiResult = gptFunc2NameAPI(inputFunction);
      apiResult.then((res) => {
        setResult(res);
        setLoading(false);
      });
    } catch {
      console.error("API 호출 에러");
    }
  }
  return (
    <button
      className="w-56 rounded-md bg-green-800 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
      onClick={() => getAPI(inputFunction)}
    >
      <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
      <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
      Convert
      <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
      <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
    </button>
  );
}

function FuncInput({ input, setInput, result }) {
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  const textareaRef = useRef(null);
  useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <div className="text-3xl mt-1 text-purple-600">function</div>
          <div className="text-3xl mt-1 text-cyan-600">{result || "Name"}</div>
          <div className="text-3xl mt-1 text-yellow-500">{`() {`}</div>
        </div>
        <div className="flex flex-col items-start justify-start text-3xl mt-1">
          <div className="relative ml-12 mt-2 w-10/12 rounded-md shadow-sm">
            <textarea
              ref={textareaRef}
              type="text"
              name="function"
              id="price"
              className="block w-full h-fit min-h-32 rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 resize-none focus:ring-2 focus:ring-inset  focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              readOnly
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
