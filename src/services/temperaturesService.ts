import { RequestBodyDefault } from "fastify";
import { temperatureSchema } from "../schemas/temperatureSchema";
import { temperaturesRepository } from "../repositories/temperaturesRepository";
import { generateDate } from "../utils/dateGenerator";

async function create(body: RequestBodyDefault) {
  const {temperature} = temperatureSchema.parse(body);
  const createdAt = generateDate();
  const temperatureData = {
    temperature,
    createdAt
  }
  await temperaturesRepository.save(temperatureData);
}

async function getTodays() {
  const today = generateDate().split(",")[0];
  const temperatures = await temperaturesRepository.getTodays(today);
  return temperatures;
}

async function getMonthTemperatures(month: string) {
  const temperatures = await temperaturesRepository.getMonthTemperatures(month);
  return temperatures;
}

export const temperaturesService = {
  create,
  getTodays,
  getMonthTemperatures
};