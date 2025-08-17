# AI-Powered Meeting Notes Summarizer and Sharer

## 1. Project Overview

This project is a Full-Stack Application that allows users to upload meeting transcripts, generate AI-powered summaries, and share them via email. The application focuses on functionality, providing a simple yet effective interface for summarizing and sharing meeting notes.Documentaion Link: https://drive.google.com/file/d/1NYsPOMbAdfPUw3zmYqDQ8o3_D12NiIP9/view?usp=sharing

**Key Features:**
- Upload text transcripts (e.g., meeting notes, call transcripts).
- Input custom instructions/prompts for the summary.
- Generate structured, editable summaries.
- Share summaries via email.

## 2. Approach

The development of the AI-Powered Meeting Notes Summarizer and Sharer followed a step-by-step approach to ensure seamless functionality.

### 2.1 Uploading Transcripts

**Frontend:**
- File upload interface built with React.js with a dropdown to select file type (PDF or text).
- `react-pdftotext` used to extract text from PDFs directly in the frontend.
- Text files read using FileReader API.
- Displayed extracted text in a preview box for user verification.

**Backend:**
- Received extracted text from the frontend.
- Temporarily stored text in server memory for processing.

### 2.2 Custom Instructions / Prompts

**Frontend:**
- Input field for custom prompts, e.g.,  
  - "Summarize in bullet points for executives"  
  - "Highlight only action items"
- Connected input to summary API request along with extracted text.

**Backend:**
- `/api/summary` endpoint configured to accept both extracted text and custom prompt.
- Passed inputs to Gemini API for context-aware summary generation.

### 2.3 Generating Summary

**Frontend:**
- "Generate Summary" button triggers backend API call.
- Returned structured summary displayed in editable sections (Title, Short Summary, Key Points, Action Items).

**Backend:**
- `/api/summary` endpoint sends extracted text and prompt to Gemini API.
- Processes API response to ensure structured format for frontend display.

### 2.4 Editing Summary

**Frontend:**
- All summary sections editable using controlled input fields.
- Users can modify, add, or remove points before sharing.

**Backend:**
- No additional processing required; handled entirely on frontend.

### 2.5 Sharing via Email

**Frontend:**
- Input fields for recipient email addresses and email subject.
- "Send Summary" button triggers email API call.
- Displays success or error messages based on response.

**Backend:**
- `/api/email` endpoint implemented using Nodemailer.
- Formats summary into email body and sends to recipients.

**Responsibilities:**
- Frontend: file uploads, PDF extraction, text preview, editing, and user input.
- Backend: communication with Gemini API for summary generation and sending emails via Nodemailer.

## 3. Process

1. **Uploading Transcripts:** Users upload Text/PDF files; frontend extracts content temporarily.  
2. **Custom Instructions/Prompts:** Users optionally provide custom prompt to align summary with their needs.  
3. **Generating Summary:** Click "Generate Summary" → transcript and prompt sent to Gemini API → structured summary returned (Title, Short Summary, Key Points, Action Items).  
4. **Editing Summary:** Generated summary is editable; users can modify or add points.  
5. **Sharing via Email:** Enter recipient emails and subject → click "Send Summary" → summary sent using Nodemailer.  

## 4. Technology Stack

| Layer         | Technology         | Purpose                                                                 |
|---------------|------------------|-------------------------------------------------------------------------|
| Frontend      | React.js          | Simple UI for file upload, summary display, and email input. Extracts text from PDFs using `react-pdftotext`. |
| Backend       | Node.js + Express.js | API endpoints for generating summaries and sending emails.             |
| AI Service    | Gemini API        | Summarizes transcripts based on user prompts.                           |
| Email Service | Nodemailer        | Sends generated summaries via email.                                     |
| Storage       | Temporary in-memory/server file storage | Holds uploaded transcripts during processing.                           |

## 5. Installation
Before starting, clone both the **frontend** and **backend** repositories into a common folder:

```bash
git clone https://github.com/meenalnimje/ai-summary-generator-frontend.git
git clone https://github.com/meenalnimje/ai-summary-generator-backend.git
```

### Frontend

Navigate to the frontend project folder:

```bash
cd ai-summary-generator-frontend
```

```bash
Install dependencies:
npm install
```

```bash
Create a .env file if required and add the backend API base URL.
```
```bash
Start the frontend:
npm start
```
### Backend

Navigate to the backend project folder:

```bash
cd ai-summary-generator-backend
```
```bash
Install dependencies:
npm install
```
```bash
Create a .env file and add necessary credentials:

GEMINI_API_KEY=your_gemini_api_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_specific_pass
ORIGIN=your_frontend_url
```
```bash
Start the backend server:
npm run hmr
```


### 6. Links
Deployed Application: https://ai-summary-generator.netlify.app/


### 7. Conclusion
The application successfully meets all requirements: uploading transcripts, generating customizable summaries, editing summaries, and sharing them via email. By leveraging Gemini API for AI summarization and Nodemailer for email functionality, the project provides a simple yet powerful tool for enhancing meeting productivity.
