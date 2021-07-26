Tweet Feed
===============================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

This is a development application that allows users to search for tweets based on keyword and filter the results based on a selected hashtag. The application makes use of React.js, Redux.js, TypeScript, and Express.js to build the reverse proxy server to communicate with the Twitter API. 

## Getting Started

In the project directory, you can run:

### `npm install`

Once the installation is complete, you can run:

### `npm start`

Runs the app in the development mode and launches the Express.js proxy instance.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

You will also need to provided a bearer token in the server.ts file. Find the variable named BEARER_TOKEN and replace the empty string with the bearer token string provided by Twitter.
You can go [here](https://developer.twitter.com/en/apply-for-access) to create a Twitter developer account and retrieve your bearer token.
