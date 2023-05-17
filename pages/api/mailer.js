import nodemailer from 'nodemailer';

// Create a transporter using email provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail({ name, email, message }) {

  const mailOptions = {
    from: email,
    to: 'yixsi3103@gmail.com',
    subject: 'New message from your portfolio',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  try {
    
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    throw new Error('Failed to send email.');
  }
}
