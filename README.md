# ai-content

## Status: Under Construction 🚧

This React app is a work in progress; It's functional, not beautiful. 

## Purpose of this App 🤖

To generate website or product copy via OpenAI's Generative Pre-trained Transformer 3 (GPT-3) an autoregressive language model that uses deep learning to produce human-like text.


https://user-images.githubusercontent.com/29527450/163495243-dffda224-bfda-43f1-bc0c-c3f5b95fb7ef.mov


### Current app features ✨

- Functional Navigation
- Three pages: Home, Product Description, Company Bio, and Blog Intro
- Functional Product Description Generator
- Functional Company Bio Generator
- Functional Blog Intro Paragraph Generator

### Product Description Generator 🛒

1. Asks end-user to enter a product name and Purpose in a form and user clicks submit.
2. App sends a prompt OpenAI's Completion Model using a predefined string with the user's variable input from the form.
3. OpenAI's API sends a response, and the app displays response from the API on page for the user.

https://user-images.githubusercontent.com/29527450/163480646-4aaf9b7a-d867-42a3-9a63-1a09a7fad760.mov



### Company Bio Generator 🛒

1. Asks end-user to enter a Company name and Purpose in a form and user clicks submit.
2. App sends a prompt OpenAI's Completion Model using a predefined string with the user's variable input from the form.
3. OpenAI's API sends a response, and the app displays response from the API on page for the user.

https://user-images.githubusercontent.com/29527450/163480671-97f0698c-4b28-4d27-9d52-4bdc9b350d96.mov


### SEO Optimized Blog Intro Paragraph Generator 💻📝

1. Asks end-user to input a blog post title and keywords separated by commas, and user click submit.
2. App sends a prompt OpenAI's Completion Model using a predefined string with the user's variable input from the form.
3. OpenAI's API sends a response, and the app displays a response from the API for the user.

https://user-images.githubusercontent.com/29527450/163480705-baf4bc60-1817-4a38-b06d-7232cfffbe8e.mov


## How to use: 

1. Fork and clone this repo
3. In Terminal open the directory ai-content/copyai
4. Check that Node.js is installed via Terminal by typing `node -v` if you don’t see a version [Instal Node.js](https://nodejs.org/en/ )
6. Type `npm install` to install any missing dependences. 
7. Type `npm start` to start the server and run the app. 
8. Obtain your OpenAI API key and add it to the component you want to use e.g. Open the /components/ProductDesciption.js file and add your API key on line 26. It's important to note that this project is completely front-end right now, and you should not push it live to the web without securing your API key. 

## Tools Used: 🛠️

- [https://docs.npmjs.com/cli/v7/commands/npm](https://www.npmjs.com/)
- https://reactjs.org
- https://react-bootstrap.github.io
- https://openai.com/ 
