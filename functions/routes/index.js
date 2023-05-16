var router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/sendEmail",async function(req,res){
    const { emails,subject,html } = req.body;

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    // Provide your email service credentials here
    service: 'Gmail',
    auth: {
        user: "sailokesh7875@gmail.com",
        pass: "okhrnpteysyhixux",
    },
  });

  try {
    // Send the email to each address in the emails array
    const emailPromises = emails.map(async (email) => {
      // Define the email options
      const mailOptions = {
        from: 'sailokesh7875@gmail.com',
        to: email,
        subject,
        html,
        text
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      console.log(`Email sent to: ${email}`);
    });

    // Wait for all emails to be sent
    await Promise.all(emailPromises);

    // Respond with a success message
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'An error occurred while sending emails' });
  }
})

module.exports = router;