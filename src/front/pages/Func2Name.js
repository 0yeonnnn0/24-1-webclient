import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

function Func2Name() {
  let [input, setInput] = useState("");
  let [result, setResult] = useState("함수 명을 입력하고 버튼을 누르면 결과가 나옵니다.");

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-4 max-w-4xl rounded-3xl ring-1 ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <Name input={input} setInput={setInput} />
              <Button input={input} setResult={setResult} />
              <Func result={result} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Name({ input, setInput }) {
  const handleInputChange = (event) => {
    setInput(event.target.value); // 입력된 값으로 상태를 업데이트합니다.
  };

  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Name
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="함수 명을 입력해주세요"
          onChange={handleInputChange}
          value={input}
        />
      </div>
    </div>
  );
}

function Button({ input, setResult }) {

  async function getResult() {
    try {
      const response = await axios.get(`http://localhost:8080/convert/n2f`, {
        params: {
          codeName: input,
        },
      });
      setResult(response.data);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("getResult에서 에러남", error);
      throw error;
    }
  }

  return (
    <button
      className="w-56 rounded-md bg-green-800 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
      onClick={() => getResult()}
    >
      <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
      <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
      Convert
      <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
      <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
    </button>
  );
}

function Func({result}) {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Function
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <textarea
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="결과가 곧 나옵니다."
          value={result}
          readOnly
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
        </div>
      </div>
    </div>
  );
}

export default Func2Name;
