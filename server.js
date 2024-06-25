const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000; // Use environment variables for port

app.use(bodyParser.json());

// API endpoint for sending emails
app.post('/api/send-email', async(req, res) => {
    try {
        const { senderEmail, message } = req.body;

        // Replace with your actual email credentials (store securely!)
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Or your preferred email service (SMTP)
            auth: {
                user: 'litaandreeamalaiasai@gmail.com', // Replace with your email address
                pass: 'your_email_password', // Replace with your actual password (store securely)
            },
        });

        // Send email
        await transporter.sendMail({
            from: ' ', // Your email address
            to: 'recipient@example.com', // Replace with intended recipient
            subject: 'New Contact Form Submission',
            text: `Sender Email: ${senderEmail}\n\nMessage: ${message}`,
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});