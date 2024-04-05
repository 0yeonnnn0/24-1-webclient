import express, { query } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const convertRouter = express.Router();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});


async function useOpenAI(content) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system", // ChatGPT에게 어떻게 행동을 할지 지정
          content: `너는 세계 최고의 React.js 전문가야. 리액트 프레임워크에 언어는 javascript를 사용해서 ${content}라는 이름을 가진 함수를 만들어줘.`,
        },
      ],
      model: "gpt-4",
      max_tokens: 512,
      temperature: 1, //창의성,


    });

    console.log(completion.choices);
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching data from ChatGPT API:", error);
    throw error;
  }
}

convertRouter.get("/n2f", async (req, res) => {
  try {
    const queryName = req.query.codeName;

    // // ChatGPT API에 key 값을 전달하여 응답을 받아옵니다.
    // const chatGPTResponse = await fetchChatGPTResponse(key);
    const ChatGPT123 = await useOpenAI(queryName);

    // 클라이언트에 ChatGPT 응답을 전송합니다.
    res.send(ChatGPT123);
  } catch (error) {
    // 오류가 발생한 경우 클라이언트에 오류 메시지를 전송합니다.
    console.error("Error processing request:", error);
    res.status(500).send("오류가 발생하였습니다.");
  }
});

export default convertRouter;
