#!/usr/bin/env node

const program = require("commander");
const { prompt } = require("inquirer");

const { getLink } = require("./getLink");
const getIndex = require("./getIndex");

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
    .alias("s")
    .description("Search for a song, write songname in double quotes")
    .action(songname => {
        console.log("Fetching...");
        getLink(songname);
        prompt(question).then(n => {
            let index = n.num;
            // pass the index to search
            getIndex(index - 1);
        });
    });

program.parse(process.argv);
