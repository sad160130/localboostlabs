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
    const { name, email, phone, business, city, trade, website, description, source } = req.body || {};

    // "trade" is the new field; fall back to legacy "city" if present
    const tradeOrCity = trade || city;

    console.log('Received form submission:', { name, email, phone, business, trade: tradeOrCity, website, source });

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

    // Get current timestamp
    const submittedAt = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'info@localboostlabs.com',
      subject: `New Lead: ${business || name || 'Website Inquiry'} - ${tradeOrCity || 'Local Boost Labs'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Lead Received!</h1>
                      <p style="color: #bfdbfe; margin: 10px 0 0 0; font-size: 14px;">Local Boost Labs</p>
                    </td>
                  </tr>

                  <!-- Alert Badge -->
                  <tr>
                    <td style="padding: 20px 30px 0 30px;">
                      <table role="presentation" style="width: 100%; background-color: #ecfdf5; border-left: 4px solid #10b981; border-radius: 4px;">
                        <tr>
                          <td style="padding: 15px;">
                            <p style="margin: 0; color: #065f46; font-size: 14px;">
                              <strong>New inquiry from ${source || 'your website'}!</strong><br>
                              <span style="color: #047857; font-size: 12px;">Submitted on ${submittedAt}</span>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Contact Details -->
                  <tr>
                    <td style="padding: 25px 30px;">
                      <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h2>

                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                            <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</span><br>
                            <span style="color: #1f2937; font-size: 16px; font-weight: 500;">${name || 'Not provided'}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                            <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</span><br>
                            <a href="mailto:${email}" style="color: #2563eb; font-size: 16px; font-weight: 500; text-decoration: none;">${email || 'Not provided'}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                            <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span><br>
                            <a href="tel:${phone}" style="color: #2563eb; font-size: 16px; font-weight: 500; text-decoration: none;">${phone || 'Not provided'}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                            <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Business Name</span><br>
                            <span style="color: #1f2937; font-size: 16px; font-weight: 500;">${business || 'Not provided'}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                            <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Trade</span><br>
                            <span style="color: #1f2937; font-size: 16px; font-weight: 500;">${tradeOrCity || 'Not provided'}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                            <span style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Current Website</span><br>
                            <span style="color: #1f2937; font-size: 16px; font-weight: 500;">${website || 'Not provided'}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Project Description -->
                  <tr>
                    <td style="padding: 0 30px 25px 30px;">
                      <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Project Description</h2>
                      <div style="background-color: #f9fafb; border-radius: 6px; padding: 15px; border: 1px solid #e5e7eb;">
                        <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">${description || 'No description provided'}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- CTA Button -->
                  <tr>
                    <td style="padding: 0 30px 30px 30px; text-align: center;">
                      <a href="mailto:${email}?subject=Re: Your inquiry to Local Boost Labs" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">Reply to This Lead</a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #6b7280; font-size: 12px;">
                        This lead was submitted from <strong>localboostlabs.com</strong><br>
                        <span style="color: #9ca3af;">Source Page: ${source || 'Not specified'}</span>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
