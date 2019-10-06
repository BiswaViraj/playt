// DOWNLOAD PROGRESS

const readline = require("readline");
const path = require("path");
const fs = require("fs");
const ytdl = require("ytdl-core");

const url = "https://www.youtube.com/watch?v=fQbGwiTA0yk";
const output = path.resolve(__dirname, "video.mp4");

const video = ytdl(url);
let starttime;
video.pipe(fs.createWriteStream(output));

// progress function
video.once("response", () => {
    starttime = Date.now();
});
video.on("progress", (chunkLength, downloaded, total) => {
    const percent = downloaded / total;
    const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
    process.stdout.write(
        `(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(
            total /
            1024 /
            1024
        ).toFixed(2)}MB)\n`
    );
    process.stdout.write(`running for: ${downloadedMinutes.toFixed(2)}minutes`);
    process.stdout.write(
        `, estimated time left: ${(
            downloadedMinutes / percent -
            downloadedMinutes
        ).toFixed(2)}minutes `
    );
    readline.moveCursor(process.stdout, 0, -1);
});
video.on("end", () => {
    process.stdout.write("\n\n");
});
