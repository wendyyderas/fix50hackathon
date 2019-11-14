// // Require Router method from 'express' module
// const router = require('express').Router();
// // Require Student model
// const Student = require('../models/studentModel');

// // Get student(s):
// router.get('/', async (req, res) => {
//     const student = await Student.find();
//     res.send(student);
// })

// // Get student by ID:
// router.get('/:id', async (req, res) => {
//     const student = await Student.findById(req.params.id);
//     res.send(student);
// })

// // Add student:
// router.post('/add', async (req, res) => {
//     let student = new Student({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         age: req.body.age,
//         schoolGrade: req.body.schoolGrade,
//         gpa: req.body.gpa,
//         date: req.body.date,
//         image: req.body.image
//     });
//     student = await student.save();
//     res.send(student);
// })

// // Update student:
// router.post('/update/:id', async (req, res) => {
//     let student = await Student.updateOne(
//         {
//             _id: req.params.id
//         },
//         {
//             $set: {
//                 firstName: req.body.firstName,
//                 lastName: req.body.lastName,
//                 age: req.body.age,
//                 schoolGrade: req.body.schoolGrade,
//                 gpa: req.body.gpa,
//                 date: req.body.date,
//                 image: req.body.image
//             }
//         }
//     );
//     res.send(student);
// })

// // Delete student:
// router.delete('/delete/:id', async (req, res) => {
//     const student = await Student.findByIdAndDelete(req.params.id);
//     res.send(student);
// })

// module.exports = router;