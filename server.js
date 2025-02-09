import OpenAI from "openai";
import 'dotenv/config'

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});



const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "Explain Machine Learning in simple terms in not more than 2 lines"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));