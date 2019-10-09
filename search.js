const homedir = require("os").homedir();
const fs = require("fs");
const download = require("./index");
const stream = require("./stream");

let folder = "playtSongs";
let dir = `${homedir}/${folder}`;

const search = (url, title) => {
    let song = `${dir}/${title}.m4a`;
    if (!fs.existsSync(song)) {
        download(url, title);
    } else {
        console.log(`Song Found In Local Folder\nPlaying Offline...`);

        stream(song);
    }
};
module.exports = search;
