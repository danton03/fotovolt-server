import { FastifyRequestType } from "fastify/types/type-provider";
import { temperaturesService } from "../services/temperaturesService";
import { FastifyReply } from "fastify";
import { monthSchema } from "../schemas/monthSchema";
import { generateDate } from "../utils/dateGenerator";

async function createTemperature(req: FastifyRequestType, reply: FastifyReply) {
  await temperaturesService.create(req.body);
  reply.status(201).send();
}

async function getTodaysTemperatures(req: FastifyRequestType, reply: FastifyReply) {
  const temperatures = await temperaturesService.getTodays();
  reply.status(200).send(temperatures);
}

async function getMonthTemperatures(req: FastifyRequestType, reply: FastifyReply) {
  const paramsKeys = Object.keys(req.query?req.query:{}); 
  const monthExists = paramsKeys.includes("month");
  let month = "";
  if (monthExists) {
    const monthValidated = monthSchema.parse(req.query).month;
    month = monthValidated < 10 ? `0${monthValidated}` : String(monthValidated);  
  } else {
    month = generateDate().slice(3,5);
  }
  const temperatures = await temperaturesService.getMonthTemperatures(month);
  reply.status(200).send(temperatures);
}

export const temperaturesController = {
  createTemperature,
  getTodaysTemperatures,
  getMonthTemperatures
};