import { Temperatures } from "@prisma/client";
import { prisma } from "../utils/prisma";

type TtemperatureData = Omit<Temperatures, 'id'>;

async function save(temperatureData: TtemperatureData) {
  await prisma.temperatures.create({
    data: temperatureData,
  })
}

async function getTodays(date: string) {
  const temperatures = await prisma.temperatures.groupBy({
    by: ["hour", "day"],  
    where: {
      day: date,
    },
    _avg: {
      temperature: true,
    },
    orderBy: {
      day: 'asc'
    }
  })

  return temperatures;
}

async function getMonthTemperatures(month: string, year: string) {
  const temperatures = await prisma.temperatures.groupBy({
    by: ["day"],  
    where: {
      month,
      year
    },
    _avg: {
      temperature: true,
    },
    orderBy: {
      day: 'asc'
    }
  })

  return temperatures;
}

export const temperaturesRepository = {
  save,
  getTodays,
  getMonthTemperatures
};