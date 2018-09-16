({
    baseUrl: '.',
    out: 'dist/jean-uuid.js',
    optimize: 'none',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/Uuid"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else if(typeof module === 'object' && module.exports) { \n" +
        "\t\t module.exports = factory(); \n " +
        "\t} else { \n" +
        "\t \troot.Uuid = root.Uuid || {}; \n" +
        "\t \troot.Uuid = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/Uuid'); \n" +
        "}));"
    },
     paths:{
        "Byte": "src/model/Byte"
    }
})