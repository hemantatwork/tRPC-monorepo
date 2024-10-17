import cors from "cors";
import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";

import { appRouter } from "./router";
import { createContext } from "./context";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server started on port http://localhost:${process.env.PORT || 5000}/`
  );
});

export type AppRouter = typeof appRouter;
