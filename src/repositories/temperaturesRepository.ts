import { prisma } from "../utils/prisma";

type TtemperatureData = {
  temperature: number,
  createdAt: string
}

async function save({temperature, createdAt}: TtemperatureData) {
  await prisma.temperatures.create({
    data: {
      temperature,
      createdAt
    }
  })
}

async function getTodays(date: string) {
  const temperatures = await prisma.temperatures.findMany({
    where: {
      createdAt: {
        contains: date
      }
    }
  })

  return temperatures;
}

async function getMonthTemperatures(month: string) {
  const temperatures = await prisma.temperatures.findMany({
    where: {
      createdAt: {
        contains: `/${month}/`
      }
    }
  })

  return temperatures;
}

export const temperaturesRepository = {
  save,
  getTodays,
  getMonthTemperatures
};