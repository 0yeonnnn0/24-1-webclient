import axios from "axios";

async function gptName2FuncAPI(functionName, framework, etc) {
  try {
    console.log(
      { functionName, framework, etc },
      "을 입력하였습니다. 잠시만 기다려주세요!"
    );
    const response = await axios.get(`/convert/n2f`, {
      params: {
        codeName: functionName,
        framework: framework,
        etc: etc,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("gptName2Func에서 에러남", error);
    throw error;
  }
}

async function gptFunc2NameAPI(input) {
  const data = {
    input,
  };
  try {
    console.log(input, "을 입력하였습니다. 잠시만 기다려주세요!");
    const response = await axios.post(`/convert/f2n`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("gptFunc2Name에서 에러남", error);
    throw error;
  }
}
export { gptName2FuncAPI, gptFunc2NameAPI };
