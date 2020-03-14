const exec = require("child_process").exec;

const stream = url => {
    function puts(error, stdout, stderr) {
        console.log(stdout);
    }

    exec(`cvlc --no-video --play-and-exit ${url}`, puts);
};

module.exports = stream;
