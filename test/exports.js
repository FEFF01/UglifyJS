exports.default = (function () {
    exports["Compressor"] = Compressor;
    exports["JS_Parse_Error"] = JS_Parse_Error;
    exports["OutputStream"] = OutputStream;
    exports["SourceMap"] = SourceMap;
    exports["TreeWalker"] = TreeWalker;
    exports["base54"] = base54;
    exports["defaults"] = defaults;
    exports["mangle_properties"] = mangle_properties;
    exports["minify"] = minify;
    exports["parse"] = parse;
    exports["reserve_quoted_keys"] = reserve_quoted_keys;
    exports["string_template"] = string_template;
    exports["tokenizer"] = tokenizer;
    exports["is_identifier"] = is_identifier;

}).toString().replace(/^.*{|}.*?$/g, "")