import express from 'express'
import { enquiryController } from '../controllers/controller.js'

const router=express.Router()

router.post('/',enquiryController)

export default router