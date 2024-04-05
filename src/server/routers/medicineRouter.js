import express from "express";
import MedicineService from "../controllers/medicineController";

const medicineRouter = express.Router();
const medicineService = new MedicineService();

medicineRouter.get("/", async (req, res) => {
  const result = await medicineService.getMedicineInfo();
  if (!result) return res.sendStatus(400);
  return res.send(result);
});

export default medicineRouter;
