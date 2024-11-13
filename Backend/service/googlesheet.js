import dotenv from 'dotenv'
dotenv.config()
import {google} from 'googleapis'

const scopes=["https://www.googleapis.com/auth/spreadsheets"]

const sheetclient=new google.auth.JWT(process.env.GOOGLE_SHEET_CLIENT_EMAIL,null,process.env.GOOGLE_SHEET_PRIVATE_KEY.replace(/\\n/g, '\n'),scopes)

export const sheets=google.sheets(
    {
        version:"v4",
        auth:sheetclient
    
    }
)

