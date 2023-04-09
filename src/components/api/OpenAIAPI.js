const { Configuration, OpenAIApi } = require('openai')

export async function callAPI(prompt, options) {
    // OpenAI davinci completion
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });
    const openai = new OpenAIApi(configuration);


    const openAPICall = openai.createCompletion("text-davinci-002", {
        prompt: prompt,
        temperature: options.temperature,
        max_tokens: options.max_tokens,
        top_p: options.top_p,
        frequency_penalty: options.frequency_penalty,
        presence_penalty: options.presence_penalty,
    })
        .then(response => {
            return `${response.data.choices[0].text}`
        })
        .catch(error => {
            console.log(error);
            return { error: true, message: "Sorry, there was an error with your request. Please make sure your API Key is valid and try again later. If the issue persists, please try again later." };
        })

    return await openAPICall;

}