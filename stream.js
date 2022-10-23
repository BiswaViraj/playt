const exec = require("child_process").exec;

const stream = url => {
    function puts(error, stdout, stderr) {
        console.log(stdout);
    }
    // should not have single quote, which will break the escaping
    if (url.includes("'")) throw Error("Invalid url, please remove single quote.")
    // executes the command in the terminal
    // plays or streams the song
    exec(`cvlc --no-video --play-and-exit '${url}'`, puts);
};

module.exports = stream;
