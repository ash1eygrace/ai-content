import fetch from "node-fetch";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/ai-content", async (req, res) => {
  const { prompt } = req.body;

  const openAPICall = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-002",
      prompt: prompt,
      temperature: 0.6,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    }),
  });

  const content = await openAPICall.json();
  res.status(201).json({ output: content });
});

const port = process.env.PORT || 6001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
