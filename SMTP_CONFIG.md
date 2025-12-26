# SMTP Configuration Guide

To make the enquiry form work, you need to create a file named `.env.local` in the root directory of this project and add your SMTP credentials.

### Example for Gmail:
Create a file `.env.local` and add:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```



> [!TIP]
> **Gmail Users:** You cannot use your regular password. You must generate an **App Password** from your Google Account settings (Search for "App Passwords" in your Google Account Security tab).

### How it works:
1. The frontend (`EnquiryForm.jsx`) sends data to `/api/contact`.
2. The backend (`app/api/contact/route.js`) uses `nodemailer` to send the email.
3. The email is sent **to zahoor.variant@gmail.com** with the customer's details.
