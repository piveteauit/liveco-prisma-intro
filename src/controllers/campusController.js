const Joi = require("joi")

const campusDataAccess = require("../models/campusDataAccess")

exports.getAll = (req, res) => {
  campusDataAccess.findMany({
    include: {
      student: true
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
  // city    String    @db.VarChar(255)
  // adresse String    @db.VarChar(255)
  const { city, adresse } = req.body

  campusDataAccess.create({data: {city, adresse}})
    .then((result) => {
      res.status(201).json({city,adresse})
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    })

}

exports.updateOne = (req, res) => {
  const studentId = req.params.id
}

exports.deleteOne = (req, res) => {
  const studentId = req.params.id
}
