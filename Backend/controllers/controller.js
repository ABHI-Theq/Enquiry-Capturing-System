import express from 'express'
import { enquirySchema } from '../helper/validator.js';
import { sheets } from '../service/googlesheet.js';
import dayjs from 'dayjs';

export const enquiryController=(req,res)=>{
    try {
        //1. Body validation 
        const body=enquirySchema.parse(req.body)
        const {name,category,emailaddress,message}=body;
        console.log(name,category,emailaddress);
        const currDate=dayjs().format('DD-MM-YYYY');

        //2. google sheet entry
        sheets.spreadsheets.values.append({
            spreadsheetId:process.env.GOOGLE_SHEET_ID,
            range:'Sheet1!A:E',
            insertDataOption:'INSERT_ROWS',
            valueInputOption:'RAW',
            requestBody:{
                values:[[name,emailaddress,category,message,currDate]]
            }
        }).catch((err)=>{
            console.log(err.response.data.error)
        })

        res.sendStatus(200);
    } catch (error) {
        console.log(error.message);
        
        res.sendStatus(500);
    }
}