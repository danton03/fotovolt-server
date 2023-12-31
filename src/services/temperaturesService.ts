import { RequestBodyDefault } from "fastify";
import { temperatureSchema } from "../schemas/temperatureSchema";
import { temperaturesRepository } from "../repositories/temperaturesRepository";
import { generateDate } from "../utils/dateGenerator";
import { z } from "zod";

async function create(body: RequestBodyDefault) {
  console.log(body);
  try {
    const {temperature} = temperatureSchema.parse(body);
    const {day, month, year, hour} = generateDate();
    const temperatureData = {
      temperature,
      day,
      month,
      year,
      hour
    }
    await temperaturesRepository.save(temperatureData);
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err.issues);
    }
  }
}

async function getTodays() {
  const today = generateDate().day;
  const temperatures = await temperaturesRepository.getTodays(today);
  return temperatures;
}

async function getMonthTemperatures(month: string, year: string) {
  const temperatures = await temperaturesRepository.getMonthTemperatures(month, year);
  return temperatures;
}

export const temperaturesService = {
  create,
  getTodays,
  getMonthTemperatures
};