const fileNamer = title => {
    let fileName = title.replace(/[^a-zA-Z0-9 ]/g, "_");
    return fileName;
};

module.exports = fileNamer;
