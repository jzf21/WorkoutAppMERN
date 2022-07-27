const express= require('express')
const Workout=require('../models/workoutModel')
const {
    createWorkout, 
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout,

} =require('../controllers/workoutController')

const router=express.Router()//creates instance for router

const mongoose=require('mongoose')

//GET all workouts
router.get('/',getWorkouts)


router.get('/:id',getWorkout)

router.post('/', createWorkout)
router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports=router
