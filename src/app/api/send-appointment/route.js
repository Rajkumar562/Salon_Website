import nodemailer from "nodemailer";

const sendGmailMessage = async (appointmentDetails) => {
  const { name, email, contact, gender, preferredTime, preferredTimePeriod, preferredDate } = appointmentDetails;

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
    subject: "New Appointment Request",
    text: `You have a new appointment request:
      Name: ${name}
      Email: ${email}
      Phone: ${contact}
      Gender: ${gender}
      Date: ${preferredDate}
      Time: ${preferredTime} ${preferredTimePeriod}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending Gmail:", error);
  }
};

export async function POST(req) {
  try {
    const appointmentDetails = await req.json();
    console.log("Appointment Details:", appointmentDetails);

    await sendGmailMessage(appointmentDetails);

    return new Response(JSON.stringify({ message: "Appointment request sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Error sending appointment request." }), { status: 500 });
  }
}
