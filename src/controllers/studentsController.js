const Joi = require("joi")

const studentsDataAccess = require("../models/studentsDataAccess")

exports.getAll = (req, res) => {}

exports.getOne = (req, res) => {
  const studentId = req.params.id
}

exports.createOne = (req, res) => {
  const { firstname, lastname, age, campus, remote } = req.body
}

exports.updateOne = (req, res) => {
  const studentId = req.params.id
}

exports.deleteOne = (req, res) => {
  const studentId = req.params.id
}
