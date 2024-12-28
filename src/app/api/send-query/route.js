import nodemailer from "nodemailer";

const sendGmailMessage = async (queryData) => {
  const { name, email, contact, query } = queryData;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: "New Query",
    text: `You have a new Query:
      Name: ${name}
      Email: ${email}
      Phone: ${contact}
      Query: ${query}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending Gmail:", error);
  }
};

export async function POST(req) {
  try {
    const queryData = await req.json();
    console.log("Query Details:", queryData);

    await sendGmailMessage(queryData);

    return new Response(JSON.stringify({ message: "Query request sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Error sending Query request." }), { status: 500 });
  }
}
