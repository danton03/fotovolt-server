import { Temperatures } from "@prisma/client";
import { prisma } from "../utils/prisma";

type TtemperatureData = Omit<Temperatures, 'id'>;

async function save(temperatureData: TtemperatureData) {
  await prisma.temperatures.create({
    data: temperatureData,
  })
}

async function getTodays(date: string) {
  const temperatures = await prisma.temperatures.findMany({
    where: {
      day: date
    }
  })

  return temperatures;
}

async function getMonthTemperatures(month: string) {
  const temperatures = await prisma.temperatures.findMany({
    where: {
      month: month
    }
  })

  return temperatures;
}

export const temperaturesRepository = {
  save,
  getTodays,
  getMonthTemperatures
};