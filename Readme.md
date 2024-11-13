Here's a basic README file for your enquiry capturing system using Google Sheets API with the MERN stack:

---

# Enquiry Capturing System

This project is a simple enquiry capturing system that uses the Google Sheets API to store and manage user enquiries. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and is designed to capture user input through a form on the frontend, then store it in a Google Sheet on the backend.

## Features

- **Frontend (React.js)**: Presents a form where users can submit enquiries.
- **Backend (Node.js and Express.js)**: Handles form submissions, communicates with the Google Sheets API, and saves enquiries to a Google Sheet.
- **Google Sheets API Integration**: Captures and stores user enquiries in a Google Sheet, which serves as the database for simplicity in this project.
  
## Prerequisites

- Node.js and npm
- MongoDB (optional, if you want to use it for user data or additional information)
- A Google Cloud Platform (GCP) account with the Google Sheets API enabled
- A Google Sheet with edit access configured through a GCP service account

## Setup

### Step 1: Clone the Repository

```bash
git clone  https://github.com/ABHI-Theq/Enquiry-Capturing-System.git
cd ECS
```

### Step 2: Install Dependencies

```bash
# Install server dependencies
cd Backend
npm install

# Install client dependencies
cd ../Frontend
npm install
```

### Step 3: Configure Google Sheets API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project and enable the Google Sheets API.
3. Create a service account and download the JSON credentials file.
4. Share your Google Sheet with edit permissions for the service account email found in the JSON file.

### Step 4: Set Up Environment Variables

Create a `.env` file in the `server` directory with the following details:

```plaintext
GOOGLE_SHEETS_CREDENTIALS=path/to/credentials.json
GOOGLE_SHEET_ID=your_google_sheet_id
PORT=9000
```

### Step 5: Run the Application

```bash
# Start the server
cd server
npm start

# Start the client
cd ../client
npm start
```

The application will be available on `http://localhost:4000`, with the backend running on `http://localhost:9000`.

## Usage

1. Access the application in your browser.
2. Fill out and submit the enquiry form.
3. The form data will be saved to the Google Sheet configured in the backend.

## Project Structure

```
enquiry-capturing-system/
├── client/          # React.js frontend
├── server/          # Node.js and Express backend
├── README.md        # Project documentation
└── .env             # Environment variables (in server directory)
```

## Technologies Used

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js
- **Database**: Google Sheets API
- **Additional**: Google Cloud Platform for Sheets integration

## Future Improvements

- Add form validation for better user input handling
- Include MongoDB for additional storage options
- Implement authentication for restricted access

## License

This project is open-source and free to use.
