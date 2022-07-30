import { Router } from "express";
var router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("index", { title: "PrivyCare" });
});


export default router;
