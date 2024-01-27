import express from "express";

const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
  res.json({ statusMessage: "Express server is running..." });
});

export default mainRouter;
