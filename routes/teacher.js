const router = require("express").Router();

const { query } = require("express");
let Teacher = require("../models/Teacher");

//Lists all teachers
router.route("/").get((req, res) => {
  Teacher.find()
    .then((teachers) => res.json(teachers))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Creates new teacher
router.route("/create").post((req, res) => {
  let teacher_detail = {
    name: req.body.name,
    experience: req.body.experience,
    classLevel: req.body.classLevel,
    speciality: req.body.speciality,
    location: req.body.location,
    isEmployed: req.body.isEmployed,
  };
  Teacher.create(teacher_detail)
    .then((res) => res.json((data) => res.json({response:"Teacher created Successfully",data:data})))
    .catch((err) =>
      res
        .status(400)
        .json({
          response: "Ops! There was an error, ensure all details are filled in",
          error: err,
        })
    );
});

// Deletes teacher by id
router.route("/delete/:id").delete((req, res) => {
  Teacher.findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.json({response:"Teacher deleted Successfully",data:data}))
    .catch((err) => res.status(400).json("Teacher with this ID does not exist" + err));
});

//Updates by id

router.route("/update/:id").post((req, res) => {
  let teacher_detail = {
    name: req.body.name,
    experience: req.body.experience,
    classLevel: req.body.classLevel,
    speciality: req.body.speciality,
    location: req.body.location,
    isEmployed: req.body.isEmployed,
  };
  Teacher.findByIdAndUpdate({_id:req.params.id},teacher_detail)
    .then((data) => res.json({response:"Teacher updated Successfully",data:data}))
    .catch((err) =>
      res.status(400)
        .json({
          response: "Ops! This ID does not exist, ensure all details are filled in",
          error: err,
        })
    );
});

router
  .route("/search")
  .get((req, res) => {
   var query=req.query
    Teacher.find(query)
      .then((teachers) => res.json(teachers))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;
