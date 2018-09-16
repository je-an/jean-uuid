define(["Byte"], function (Byte) {
    /**
     * Provides functionality for creation of uuids 
     * Implemented by instructions of https://www.famkruithof.net/guid-uuid-random.html
     */
    return {
        Byte: Byte,
        /** @returns {String} - the generated uuid */
        generate: function () {
            var bin = [], d = [], bytes = [];
            var j, i;
            //Create 128 random bits
            for (var i = 0; i < 128; i++) {
                bin.push(Math.round(Math.random()));
            }
            var string = "";
            for (var i = 0; i < 128; i = i + 8) {
                var values = bin.slice(i, i + 8);
                var b = new Byte(values);
                bytes.push(b);

            }
            return bytes[0].hexString + bytes[1].hexString + bytes[2].hexString + bytes[3].hexString + "-" +
                bytes[4].hexString + bytes[5].hexString + "-" + bytes[6].hexString + bytes[7].hexString + "-" +
                bytes[8].hexString + bytes[9].hexString + "-" + bytes[10].hexString + bytes[11].hexString +
                bytes[12].hexString + bytes[13].hexString + bytes[14].hexString + bytes[15].hexString;
        }
    }
});