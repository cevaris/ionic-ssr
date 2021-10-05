import express from "express";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.json({ success: true, message: "Ionic SSR API" });
});

module.exports = router;
