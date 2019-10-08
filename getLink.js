const ytSearch = require("yt-search");

let links = [];
let titles = [];
const getLink = query => {
    ytSearch(query, function(err, r) {
        if (err) throw err;

        const videos = r.videos;

        for (let i = 0; i < 10; i++) {
            titles.push(videos[i].title);

            links.push(videos[i].url);
            console.log(`\n${i + 1}-- ${titles[i]}`);
        }
    });
};

module.exports = { getLink, links, titles };
