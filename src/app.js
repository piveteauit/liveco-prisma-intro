const express = require("express")

require("dotenv").config()

const app = express()

app.use(express.json())

const studentsRoutes = require("./routes/studentsRoutes")
const campusRoutes = require("./routes/campusRoutes")

app.use("/students", studentsRoutes)
app.use("/campus", campusRoutes)

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
