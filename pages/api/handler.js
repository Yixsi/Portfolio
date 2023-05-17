import { sendEmail } from './mailer';

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await sendEmail({ name, email, message });
      res.status(200).json({ message: 'Nice, your email was sent. :)' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email. :c' });
    }
  } else {
    res.status(400).json({ error: 'Invalid request method. :/' });
  }
}
