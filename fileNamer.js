const fileNamer = title => {
    let fileName = title.replace(/ /g, "_");
    return fileName;
};

module.exports = fileNamer;
