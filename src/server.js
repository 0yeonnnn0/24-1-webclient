import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import convertRouter from "./server/routers/convertRouter";

const app = express();
const port = 8080;

app.use(cors());
app.use(morgan("dev"));
// app.use((req, res) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // 특정 도메인 허용
//   res.header("Access-Control-Allow-Origin", "http://functionconverter.duckdns.org"); // 특정 도메인 허용
// });

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.use("/convert", convertRouter);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port} 🚀`);
});
