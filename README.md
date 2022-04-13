# ai-content

## Status: Under Construction 🚧

This React app is a work in progress; It's functional, not beautiful. 

## Purpose of this App 🤖

To generate website or product copy via OpenAI's Generative Pre-trained Transformer 3 (GPT-3) an autoregressive language model that uses deep learning to produce human-like text.

### Current app features ✨

- Functional Navigation
- Three pages: Home, Product Description, Company Bio, and Blog Intro
- Functional Product Description Generator
- Functional Company Bio Generator
- Functional Blog Into Paragraph Generator

### Product Description Generator 🛒

1. Asks end-user to enter a product name and Purpose in a form and user clicks submit.
2. App sends a prompt OpenAI's Completion Model using a predefined string with the user's variable input from the form.
3. OpenAI's API sends a response, and the app displays response from the API on page for the user.

### Company Bio Generator 🛒

1. Asks end-user to enter a Company name and Purpose in a form and user clicks submit.
2. App sends a prompt OpenAI's Completion Model using a predefined string with the user's variable input from the form.
3. OpenAI's API sends a response, and the app displays response from the API on page for the user.

### SEO Optimized Blog Intro Paraphrage Generator 💻📝

1. Asks end-user to input a blog post title and keywords separated by commas, and user click submit.
2. App sends a prompt OpenAI's Completion Model using a predefined string with the user's variable input from the form.
3. OpenAI's API sends a response, and the app displays a response from the API for the user.


## Usage: 

You'll need node to run the react app locally & open the /components/ProductDesciption.js file and add your API key on line 26.

## Tools Used: 🛠️

- https://docs.npmjs.com/cli/v7/commands/npm
- https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
- https://react-bootstrap.github.io/components/alerts
- https://openai.com/ 
- https://beta.openai.com/docs/guides/completion
