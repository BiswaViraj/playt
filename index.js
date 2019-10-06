const fs = require("fs");
const ytdl = require("ytdl-core");

const download = (url, title) => {
    ytdl(url, { filter: "audioonly" }).pipe(
        fs.createWriteStream(`${title}.mp3`)
    );
};

// download("https://www.youtube.com/watch?v=fQbGwiTA0yk");

module.exports = download;
