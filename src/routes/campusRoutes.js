const express = require("express")

const campusController = require("../controllers/campusController")

const router = express.Router()

router.get("/", campusController.getAll)
router.get("/:id", campusController.getOne)
router.post("/", campusController.createOne)
router.put("/:id", campusController.updateOne)
router.delete("/:id", campusController.deleteOne)

module.exports = router
