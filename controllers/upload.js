const { GoogleGenerativeAI } = require("@google/generative-ai");
const nodemailer = require("nodemailer");
const SYSTEM_INSTRUCTION = `
You are a precise meeting/script summarizer.
Return clean, structured markdown with:
- Title
- TL;DR (3–5 bullets)
- Key Points
- Action Items (Owner → Task → Due)
- Risks/Blockers
- Next Steps
Be concise, faithful to the text, and follow any user instruction.
`;

exports.summarize = async (req, res) => {
  try {
    const { text, prompt } = req.body;

    if (!text || typeof text !== "string" || !text.trim()) {
      return res.status(400).json({ error: "Text is required" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const userPrompt = `User Instruction: ${
      prompt || "Summarize clearly with action items first."
    }\n\nText:\n${text}`;

    const result = await model.generateContent([
      { text: SYSTEM_INSTRUCTION },
      { text: userPrompt },
    ]);

    const summary = result.response.text().trim();

    return res.status(200).json({ summary });
  } catch (err) {
    console.error("Summarize error:", err);
    return res.status(500).json({ error: "Failed to summarize" });
  }
};

exports.sendEmail = async (req, res) => {
  try {
    const { email, summary } = req.body;

    if (!email || !summary) {
      return res.status(400).json({ error: "Email and summary are required" });
    }

    const transporter = nodemailer.createTransport({
      secure: true,
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Summary from Your App",
      text: summary,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Send email error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
