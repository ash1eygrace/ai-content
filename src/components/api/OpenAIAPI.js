export async function callAPI(prompt, options) {
  try {
    const response = await fetch(`/api/ai-content`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        prompt: prompt,
        temperature: options.temperature,
        max_tokens: options.max_tokens,
        top_p: options.top_p,
        frequency_penalty: options.frequency_penalty,
        presence_penalty: options.presence_penalty,
      }),
    });

    const data = await response.json();
    return data.output.choices[0].text;
  } catch (error) {
    console.log(error);
    console.log("error");
    return {
      error: true,
      message:
        "Sorry, there was an error with your request. Please make sure your API Key is valid and try again later. If the issue persists, please try again later.",
    };
  }
}
