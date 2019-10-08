const fileNamer = require("./fileNamer");
const search = require("./search");

const { links, titles } = require("./getLink");

const getIndex = index => {
    console.log(titles[index]);
    let title = fileNamer(titles[index]);
    let url = `https://www.youtube.com${links[index]}`;
    search(url, title);
};

module.exports = getIndex;
