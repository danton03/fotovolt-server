import { FastifyInstance } from "fastify";
import { temperaturesController } from "../controllers/temperaturesController";

export async function temperatureRoutes(app:FastifyInstance) {
  app.post("/temperatures", temperaturesController.createTemperature);
  app.get("/temperatures/today", temperaturesController.getTodaysTemperatures);
  app.get("/temperatures/monthly", temperaturesController.getMonthTemperatures);
}