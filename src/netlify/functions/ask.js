import axios from "axios";

export async function handler(event) {
  try {
    const body = JSON.parse(event.body);
    const question = body.question;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: question }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        answer: response.data.choices[0].message.content
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "AI error" })
    };
  }
}