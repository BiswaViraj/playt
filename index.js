const fs = require("fs");
const ytdl = require("ytdl-core");
const readline = require("readline");
const path = require("path");
const homedir = require("os").homedir();

// var sys = require("sys");
// var exec = require("child_process").exec;

const download = (url, title) => {
    let folder = "playtSongs";
    const output = path.resolve(homedir, `./${folder}/${title}.mp3`);
    let song = `${title}.mp3`;
    let dir = `${homedir}/${folder}`;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(path.join(homedir, folder));
    }
    const video = ytdl(url, { filter: "audioonly" });
    video.pipe(fs.createWriteStream(output));
    let starttime;

    video.once("response", () => {
        starttime = Date.now();
        // function puts(error, stdout, stderr) {
        //     sys.puts(stdout);
        // }
        // exec(`mpv ${song}`, puts);
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
        process.stdout.write(
            `running for: ${downloadedMinutes.toFixed(2)}minutes`
        );
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
};

// download("https://www.youtube.com/watch?v=ESQVVfrRg7w", "test");
module.exports = download;
