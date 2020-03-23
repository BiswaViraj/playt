const ytSearch = require("yt-search");

let links = [];
let titles = [];

// search and store links and titles
const getLink = query => {
    // searches for the song name
    ytSearch(query, function(err, r) {
        if (err) throw err;

        const videos = r.videos;

        for (let i = 0; i < 10; i++) {
            titles.push(videos[i].title);
            // https://youtube links
            links.push(videos[i].url);
            console.log(`\n${i + 1}-- ${titles[i]}`);
        }
    });
};

module.exports = { getLink, links, titles };
