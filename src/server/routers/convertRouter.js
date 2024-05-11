import express, { query } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const convertRouter = express.Router();

convertRouter.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

async function useOpenAI(content, key) {
  const messages = {
    n2f: `너는 세계 최고의 '${content.framework}' 전문가야.
          리액트 프레임워크에 언어는 javascript를 사용해서 '${content.codeName}'라는 이름을 가진 함수를 만들어줘.
          또한 그 함수를 만들 때 '${content.etc}'라는 사항도 고려해서 만들어줘.
          대답을 할 땐 다른 말이나 import구문 등 없이, 그저 코드만 보내줬으면 좋겠어.
          그리고 함수를 만들 땐 const가 아닌 function문을 사용해줘.`,
    f2n: `너는 세계 최고의 'React' 전문가야.
          리액트 프레임워크에 언어는 javascript를 사용해서 '${content}'라는 함수를 만들었어.
          그 함수를 보고 그 함수의 정확한 이름을 지어줘.
          대답을 할 땐 다른 말 없이, 'handleInputChange'처럼 "이름만 보내줬으면" 좋겠어.`,
  };

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: messages[key] }],
      model: "gpt-4",
      max_tokens: 512,
      temperature: 1, // 창의성
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
    const queryName = req.query;

    const ChatGPT123 = await useOpenAI(queryName, "n2f");

    res.send(ChatGPT123);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("오류가 발생하였습니다.");
  }
});

convertRouter.post("/f2n", async (req, res) => {
  try {
    const data = req.body.input;

    const ChatGPT123 = await useOpenAI(data, "f2n");

    res.send(ChatGPT123);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("오류가 발생하였습니다.");
  }
});

export default convertRouter;
