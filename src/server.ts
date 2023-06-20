import fastify from "fastify";
import "dotenv/config";
import cors from "@fastify/cors";
import { temperatureRoutes } from "./routes/temperaturesRoute";

const PORT: number = Number(process.env.PORT) || 3000;
const HOST: string = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(temperatureRoutes);

app.listen({host: HOST, port: PORT })
.then(() => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server rodando em ${HOST}:${PORT}`);
})
.catch((err) => {
  app.log.error(err)
  process.exit(1)
});