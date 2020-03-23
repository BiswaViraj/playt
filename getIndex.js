const fileNamer = require("./fileNamer");
const search = require("./search");

const { links, titles } = require("./getLink");

// passes the url and title of the song index from the prompt
const getIndex = index => {
    console.log(titles[index]);
    let title = fileNamer(titles[index]);
    let url = links[index];
    search(url, title);
};

module.exports = getIndex;
