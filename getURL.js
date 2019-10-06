var search = require("youtube-search");

require("dotenv").config();

var opts = {
    maxResults: 5,
    key: process.env.YOUTUBE_KEY
};
let links = [];

const getLink = linkArray => {
    search("jsconf", opts, function(err, results) {
        if (err) return console.log(err);

        results.forEach(function(result) {
            console.log(result.link);
            linkArray.push(result.link);
        });
        let index = getIndex();
        console.dir(linkArray[index]);
    });
};

getLink(links);

let testIndex;

const getIndex = () => {
    testIndex = 2;
    // console.log("hello");
    return testIndex;
};
