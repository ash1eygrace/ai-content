const { Configuration, OpenAIApi } = require('openai')


export async function callAPI(prompt) {
    // OpenAI davinci completion
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });
    const openai = new OpenAIApi(configuration);


    const openAPICall = openai.createCompletion("text-davinci-002", {
        prompt: prompt,
        temperature: 0.6,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    })
    .then(response => {
        return `${response.data.choices[0].text}`
    })
    .catch(error => {
        console.log(error)
    })
    
    return await openAPICall;

}