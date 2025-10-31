# EmailJS Setup Guide for TechFusion Hub Contact Form

## Overview

The contact form in the TechFusion Hub website uses EmailJS to send emails directly from the frontend without requiring a backend server.

## Setup Instructions

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID**

### 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent through the TechFusion Hub contact form.
```

4. Note down the **Template ID**

### 4. Get Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

### 5. Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Set Destination Email

In your EmailJS template settings, configure where you want to receive the contact form emails:

- Usually this would be: `techfusionhub.in@gmail.com`

### 7. Test the Setup

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your configured email for the message

## Template Variables

The form sends these variables to EmailJS:

- `{{name}}` - User's full name
- `{{email}}` - User's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Troubleshooting

- Make sure environment variables are properly set
- Check EmailJS dashboard for any service configuration issues
- Verify your email service is properly connected
- Check browser console for any error messages

## Security Notes

- The public key is safe to expose in frontend code
- EmailJS handles rate limiting automatically
- Consider adding reCAPTCHA for additional spam protection
