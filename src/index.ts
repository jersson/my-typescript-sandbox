import express from "express";

import mainRouter from "./routers/mainRouter";

const port = 3000;
const app = express();

app.use(mainRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
