import express from "express";
// import { registerCORS } from './middleware/cors';
// import { openapi } from './routes/docs';

export const app: express.Express = express();

// parse all json request body as object
app.use(express.json());

// dont announce what kind of server we are running
app.disable("x-powered-by");

// registerCORS(app);

// openapi docs
// openapi(app);

// ignore favicon requests
app.get("/favicon.ico", (req, res) => res.sendStatus(204));

// import custom routes
app.use(require("./routes"));
// app.use(require("./routes/media"));
