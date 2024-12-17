require("dotenv").config();
const express = require("express");
const postmark = require("postmark");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Postmark client
const postmarkClient = new postmark.ServerClient(
  process.env.POSTMARK_API_TOKEN
);

// Endpoint to send an invoice
app.post("/send-invoice", async (req, res) => {
  const { email, name, plan, price, features, transactionId, date } = req.body;

  try {
    await postmarkClient.sendEmail({
      From: "your-email@example.com", // Verified sender email
      To: email, // Recipient email
      Subject: "Your Invoice",
      HtmlBody: `
        <h1>Invoice</h1>
        <p>Hello ${name},</p>
        <p>Thank you for your purchase. Here is your invoice:</p>
        <ul>
          <li><strong>Plan:</strong> ${plan}</li>
          <li><strong>Price:</strong> ${price}</li>
          <li><strong>Features:</strong></li>
          <ul>
            ${features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <li><strong>Transaction ID:</strong> ${transactionId}</li>
          <li><strong>Date:</strong> ${date}</li>
        </ul>
        <p>We appreciate your business!</p>
      `,
      TextBody: `Hi ${name}, here is your invoice for ${plan} (${price}). Transaction ID: ${transactionId}. Date: ${date}.`,
    });

    res.status(200).send("Invoice sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send invoice");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
