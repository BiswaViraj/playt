const program = require("commander");
const { prompt } = require("inquirer");

const { getLink, getIndex } = require("./getLink");

const question = [
    {
        type: "number",
        name: "num",
        message: "Enter the number you want to download"
    }
];

program.version("1.0.0").description("Stream and Download Youtube songs");

program
    .command("search <songname>")
    .alias("-s")
    .description("Search for a song")
    .action(songname => {
        console.log("Fetching...");

        getLink(songname);
        prompt(question).then(n => {
            let index = n.num;

            getIndex(index - 1);
        });
    });

program.parse(process.argv);
