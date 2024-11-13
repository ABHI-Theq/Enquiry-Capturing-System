import {z} from 'zod'

export const enquirySchema=z.object({
    name:z.string().min(4).max(100),
    emailaddress:z.string().email(),
    category:z.enum(["Service Request","Feedback","Complaint"]),
    message:z.string().min(3).max(200)
}).required()