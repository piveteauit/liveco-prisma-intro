const Joi = require("joi")

const studentsDataAccess = require("../models/studentsDataAccess")

exports.getAll = (req, res) => {
  studentsDataAccess.findMany({
    include: {
      campus: true
    }
  })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    })
}

exports.getOne = (req, res) => {
  const studentId = req.params.id
}

exports.createOne = (req, res) => {
  const { firstname, lastname, age, campus, remote } = req.body

  studentsDataAccess.create({data: {
    firstname,
    lastname,
    age,
    campId: campus,
    remote: remote || false
  }})
  .then((result) => {
    res.status(201).json(result)
  })
}

exports.updateOne = (req, res) => {
  const studentId = req.params.id
}

exports.deleteOne = (req, res) => {
  const studentId = req.params.id
}
