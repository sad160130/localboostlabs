const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if environment variables are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing environment variables: GMAIL_USER or GMAIL_APP_PASSWORD');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { name, email, phone, business, city, description, source } = req.body || {};

    console.log('Received form submission:', { name, email, phone, business, city, source });

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Verify transporter connection
    await transporter.verify();
    console.log('SMTP connection verified');

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'kadamrohan1988@gmail.com',
      subject: `New Lead from Local Boost Labs - ${source || 'Website'}`,
      html: `
        <h2>New Lead Received</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email || 'Not provided'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Phone</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone || 'Not provided'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Business Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${business || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">City</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${city || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Project Description</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${description || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">Source Page</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${source || 'Not specified'}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">This lead was submitted from localboostlabs.vercel.app</p>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    // Redirect to thank you page
    res.redirect(302, '/thank-you.html');
  } catch (error) {
    console.error('Email error:', error.message);
    console.error('Full error:', error);
    res.status(500).json({
      error: 'Failed to send email',
      details: error.message
    });
  }
};
