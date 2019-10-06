const program = require("commander");

const getLink = require("./getURL");

program.version("1.0.0").description("Stream and Download Youtube songs");

program
    .command("search <songname>")
    .alias("-s")
    .description("Search for a song")
    .action(songname => {
        getLink(songname);
    });

program.parse(process.argv);
