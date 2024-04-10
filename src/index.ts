import express from "express";
import { morganLogger } from "./logger";
import cors from "cors";
import { env } from "./env";
import { proxy } from "./controller";

const app = express();

// Logger Middleware
app.use(morganLogger);

// CORS Middleware
app.use(cors());

// // Authorization
// app.use("", (req, res, next) => {
//   if (req.headers.authorization) {
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// });

// Ping
app.get("/ping", (req, res) => {
  res.send(`${new Date().getTime()}`);
});

// Proxy
env.DOMAINS.forEach((domain) => {
  app.use(`/${domain}`, proxy(domain));
});

app.listen(env.PORT, () => {
  console.log(`Server started on http://localhost:${env.PORT}`);
});
