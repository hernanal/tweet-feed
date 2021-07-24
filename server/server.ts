import { TWITTER_SEARCH_API } from '../src/constants';
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const util = require('util');
const request = require('request');
const get = util.promisify(request.get);
// const cors = require('cors');

const app = express();
let port = process.env.PORT || 3000;

// Parse json requests only
app.use(bodyParser.json());
// Parse urlencoded json bodies only
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAI4OHgEAAAAAlbk0HSIAqcc3havrrU9j2NeAQ34%3DzJmzwHuQerd8JJ2TeuHfqwKgBt6bK4tk93w3ocBB2vPuKMF3cG';

const searchURL = (searchParam) => new URL(`${TWITTER_SEARCH_API}?q=${searchParam}&count=5&result_type=popular`);
const loadMoreURL = (queryPath) => new URL(`${TWITTER_SEARCH_API}${queryPath}`);

app.get('/api/search', async (_req, res) => {
    if (!BEARER_TOKEN) {
        res.status(400).send('Could not authenticate');
    }
    
    const token = BEARER_TOKEN;
    const requestConfig = {
        url: searchURL(res.req.query.searchParam),
        auth: {
            bearer: token
        },
        json: true
    };
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });
    try {
        const response = await get(requestConfig);

        if (response.statusCode !== 200) {
            if (response.statusCode === 400) {
                res.status(403).send(response.body);
            }
            else {
                throw new Error(response.body.error.message);
            }
        }
        res.send(response.body);
    }
    catch (e) {
        res.send(e);
    }
});

app.get('/api/search/loadmore', async (_req, res) => {
    if (!BEARER_TOKEN) {
        res.status(400).send('Could not load more');
    }
    console.log(res.req);
    const token = BEARER_TOKEN;
    const requestConfig = {
        url: loadMoreURL(res.req.query.loadMoreQuery),
        auth: {
            bearer: token
        },
        json: true
    };
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });
    try {
        const response = await get(requestConfig);

        if (response.statusCode !== 200) {
            if (response.statusCode === 400) {
                res.status(403).send(response.body);
            }
            else {
                throw new Error(response.body.error.message);
            }
        }
        res.send(response.body);
    }
    catch (e) {
        res.send(e);
    }
});

console.log("NODE_ENV is", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../build")));
    app.get("*", (_request, res) => {
        res.sendFile(path.join(__dirname, "../build", "index.html"));
    });
} else {
    port = 3001;
}

server.listen(port, () => console.log(`Listening on port ${port}`));