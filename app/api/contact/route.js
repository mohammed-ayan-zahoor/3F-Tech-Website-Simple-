import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, mobile, service, message } = await request.json();

        // Check if environment variables are set
        const missing = [];
        if (!process.env.SMTP_USER) missing.push("SMTP_USER");
        if (!process.env.SMTP_PASS) missing.push("SMTP_PASS");

        if (missing.length > 0) {
            throw new Error(`Missing environment variables: ${missing.join(", ")}. Please check your .env file and RESTART the terminal.`);
        }

        // Create a transporter object
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false // Helps avoid issues in some environments
            }
        });

        // Email options
        const mailOptions = {
            from: `"3F Tech Website" <${process.env.SMTP_USER}>`,
            to: "zahoor.variant@gmail.com", // Site owner email
            subject: `New Enquiry: ${service}`,
            text: `
                Name: ${name}
                Mobile: ${mobile}
                Service: ${service}
                Message: ${message}
            `,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #003366;">New Enquiry Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Mobile:</strong> ${mobile}</p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background: #f5f7fa; padding: 15px; border-radius: 8px;">
                        ${message || 'No message provided.'}
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

    } catch (error) {
        console.error("Nodemailer Error:", error);
        return NextResponse.json({ message: "Failed to send email", error: error.message }, { status: 500 });
    }
}
