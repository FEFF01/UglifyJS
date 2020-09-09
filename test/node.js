var fs = require("fs");

new Function("MOZ_SourceMap", "exports", require("../tools/exports").FILES.concat(require.resolve("./exports")).map(function(file) {
    //if (/exports\.js$/.test(file)) file = require.resolve("./exports");
    return require(file).default//fs.readFileSync(file, "utf8");
}).join("\n\n"))(require("source-map"), exports);
