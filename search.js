const homedir = require("os").homedir();
const fs = require("fs");
const download = require("./index");
const stream = require("./stream");

let folder = "playtSongs";
let dir = `${homedir}/${folder}`;

const search = (url, title) => {
    // creates song file
    let song = `${dir}/${title}.m4a`;
    if (!fs.existsSync(song)) {
        // downloads and streams the song
        download(url, title);
    } else {
        console.log(`Song Found In Local Folder\nPlaying Offline...`);
        // just plays the offline song
        stream(song);
    }
};
module.exports = search;
