# ai-content

## Status: Under Construction 🚧

This React app is a work in progress and is always being updated.  

## Purpose of this App 🤖

To generate website, product copy, and brianstorm ideas with OpenAI's Generative Pre-trained Transformer 3 (GPT-3) an autoregressive language model that uses deep learning to produce human-like text.


https://user-images.githubusercontent.com/29527450/187236104-233cbfe6-fe08-48fe-81f7-646d72d3cf0c.mp4


## Getting Started 🛠️: 

### Tools Used: 

- [Node.js](https://nodejs.org/)
- [npm](https://npmjs.com)
- [React](https://reactjs.org)
- [React Bootstrap](https://react-bootstrap.github.io)
- [OpenAI's GPT-3 autoregressive language model](https://openai.com/)

### Installation: 
1. Fork and clone this repo
3. In Terminal open the directory ai-content
4. Check that Node.js is installed via Terminal by typing `node -v` if you don’t see a version [Install Node.js](https://nodejs.org/en/ )
6. Type `npm install` to install any missing dependences. 
7. Type `npm start` to open the app via http://localhost:3000/
8. Obtain your [OpenAI API key](https://openai.com/api/) via Log In > Personal > API keys > Create and Copy your Secret Key. 
9. In root add a `.env` file with an API key variable REACT_APP_API_KEY. e.g `REACT_APP_API_KEY='your api key here'`

## Structure: 

```
ai-content
├── node_modules
├── public
│   └──favicon.ico
│   └── index.html
│   └── manifest.json
│   └── robots.txt
├── src
│   ├── assets
│   │   └──images
│   │      └── logo.svg
│   ├── components
│   │   ├── BlogIdeas.js
│   │   ├── BlogIntro.js
│   │   ├── CompanyBio.js
│   │   ├── Generators.js
│   │   ├── Home.js
│   │   ├── LinkedInJobDescription.js
│   │   ├── Navigation.js
│   │   ├── OpenAIAPI.js
│   │   ├── ProductDescription.js
│   │   └── Tldr.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── Index.css
│   └── Index.js
├── .gitignore
├── package.json
└── README.md
```

## Current app features ✨

- Navigation
- Generators List Page 
- Product Description Generator
- Company Bio Generator
- Blog Intro Paragraph Generator
- LinkedIn Job Description Generator
- TL;DR text summarizer
- One async function to call OpenAPI

## Examples: 

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
