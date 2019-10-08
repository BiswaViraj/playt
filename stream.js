const sys = require("util");
const exec = require("child_process").exec;

const stream = url => {
    function puts(error, stdout, stderr) {
        console.log(stdout);
    }

    exec(`cvlc --no-video --play-and-exit https://www.youtube.com${url}`, puts);
    console.log(`Playing...`);
};

module.exports = stream;
