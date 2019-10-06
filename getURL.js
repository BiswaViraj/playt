const search = require("youtube-search");

const download = require("./index");

const fileNamer = require("./fileNamer");

require("dotenv").config();

var opts = {
    maxResults: 5,
    key: process.env.YOUTUBE_KEY
};
let links = [];
let titles = [];

const getLink = query => {
    search(query, opts, function(err, results) {
        if (err) return console.log(err);

        results.forEach(function(result) {
            // console.log(result.link);
            // console.log(result.title);

            links.push(result.link);
            titles.push(result.title);
        });
        let index = getIndex();
        // console.log(titles[index]);

        let title = fileNamer(titles[index]);
        // console.log(title);

        // console.dir(links[index]);
        download(links[index], title);
    });
};

// getLink();

let testIndex;

const getIndex = () => {
    testIndex = 0;
    // console.log("hello");
    return testIndex;
};

module.exports = getLink;
