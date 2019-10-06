const fs = require("fs");
const ytdl = require("ytdl-core");

const download = url => {
    ytdl(url, { filter: "audioonly" }).pipe(fs.createWriteStream("test1.mp3"));
};

download("https://www.youtube.com/watch?v=fQbGwiTA0yk");
