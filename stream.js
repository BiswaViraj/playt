const exec = require("child_process").exec;

const stream = url => {
    function puts(error, stdout, stderr) {
        console.log(stdout);
    }

    exec(`vlc -Idummy --play-and-exit ${url}`, puts);
};

module.exports = stream;
