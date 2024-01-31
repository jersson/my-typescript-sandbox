import express from "express";

import mainRouter from "./routers/mainRouter";
import booksRouter from "./routers/booksRouter";

const port = 3000;
const app = express();

app.use(mainRouter);
app.use(booksRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
