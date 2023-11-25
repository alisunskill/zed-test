// updatedRoutes.js
const express = require("express");
const router = express.Router();
const updatedController = require("./controller");

router.post("/createdata", updatedController.storeData);

router.put("/editdata/:id", updatedController.editData);

router.get("/getdata", updatedController.getAllData);

router.get("/getdata/:id", updatedController.getData);

router.delete("/deletedata/:id", updatedController.deleteData);

module.exports = router;
