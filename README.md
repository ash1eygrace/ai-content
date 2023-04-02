# ai-content

## Purpose of this App 🤖

To generate website, product copy, and brianstorm ideas with OpenAI's Generative Pre-trained Transformer 3 (GPT-3) an autoregressive language model that uses deep learning to produce human-like text.

![ai-app-theme-options](https://user-images.githubusercontent.com/29527450/229376018-b5950288-cd76-407b-8a25-9649da34327c.jpg)


## Getting Started 🛠️: 

### Tools Used: 

- [Node.js](https://nodejs.org/)
- [npm](https://npmjs.com)
- [React](https://reactjs.org)
- [React Bootstrap](https://react-bootstrap.github.io)
- [Font Awesome](https://fontawesome.com/docs/web/use-with/react/)
- [OpenAI's GPT-3 autoregressive language model](https://openai.com/)

### Development:

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
│   ├── _redirects
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets
│   │   └── images
│   │       └── logo.png
│   ├── components
│   │   ├── api
│   │   │   └── OpenAIAPI.js
│   │   ├── common
│   │   │   ├── CopyToClipboard.js
│   │   │   ├── LoadingSpinner.js
│   │   │   ├── ThemeContext.js
│   │   │   ├── ThemeToggle.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── Navigation.js
│   │   ├── generators
│   │   │   ├── Generator.js
│   │   │   ├── GeneratorCard.js 
│   │   │   └── Generators.js
│   │   └── pages
│   │       └── Home.js
│   ├── data
│   │   └── generatorList.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md

```

## Current app features ✨

- Navigation
- Theme toggle for dark and light modes
- Blog Post Ideas Generator
- Product Description Generator
- Company Bio Generator
- SEO Blog Intro Paragraph Generator
- LinkedIn Job Description Generator
- TL;DR Text SummarizerGenerator

https://user-images.githubusercontent.com/29527450/229373842-d9e8182f-a0e7-4136-a040-b736db8e34fc.mov


## Examples: 

### Themes ✨

- The app features two themes: a dark theme and a light theme for your preference.
- Switching between themes is easy - just click the toggle button in the navigation bar. The moon ☽ icon indicates the dark theme, while the sun ☀️ icon represents the light theme.
- Your chosen theme will be saved in local storage, so you won't have to select it again as you navigate around the app.

https://user-images.githubusercontent.com/29527450/229374056-fbd30eb7-d640-4187-8a18-cb2939c16b77.mov


### Generators ♺

- The app dynamically displays each generator from an array of data via routes, making it easy to add new generators in one data file.
- Each generator prompts the user for input via a form, based on the generator.
- When the user submits their prompt, their prompt is concatenated with a predefined context string for the generator that's defined in the data to produce the best response from GPT.
- While waiting for a response, state changes to show a Loading spinner, and the card header title indicates that the app is thinking.
- Once OpenAI sends a response, state changes to show a new card header title, the body of the response from OpenAI, and a copy to clipboard button for easy copying.
- The copy to clipboard button changes to a "copied" state and back to the clipboard copy button after a few seconds, making it easy to copy the response multiple times if necessary.

#### Product Description Generator 🛒

https://user-images.githubusercontent.com/29527450/229372828-b4b30c1f-be9e-494c-a108-628b52ec6220.mov

#### Company Bio Generator 🛒

https://user-images.githubusercontent.com/29527450/229372925-72b03169-a992-4dd7-8a4a-33f512395005.mov
