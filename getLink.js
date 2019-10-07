const search = require("youtube-search");

const download = require("./index");

const fileNamer = require("./fileNamer");

require("dotenv").config();

var opts = {
    maxResults: 10,
    type: "video",
    order: "relevance",
    key: process.env.YOUTUBE_KEY
};
let links = [];
let titles = [];

const getLink = query => {
    search(query, opts, function(err, results) {
        if (err) return console.log(err);
        let num = 1;
        results.forEach(function(result) {
            console.log(`\n${num} ${result.title}`);
            num++;

            links.push(result.link);
            titles.push(result.title);
        });
    });
};

const getIndex = index => {
    console.log(titles[index]);
    let title = fileNamer(titles[index]);

    download(links[index], title);

    console.dir(links[index]);
};

module.exports = { getLink, getIndex };
