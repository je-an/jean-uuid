define(["Byte"], function (Byte) {
    /**
     * Provides functionality for creation of uuids 
     * Implemented by instructions of https://www.famkruithof.net/guid-uuid-random.html
     */
    return {
        Byte: Byte,
        /** @returns {String} - the generated uuid */
        generate: function () {
            var binaryValues = [], bytes = [], i;
            //Create 128 random bits
            for (i = 0; i < 128; i++) {
                binaryValues.push(Math.round(Math.random()));
            }
            // Create 16 Byte objects from the 128 random bits
            for (i = 0; i < 128; i = i + 8) {
                bytes.push(new Byte(binaryValues.slice(i, i + 8)));
            }
            // To put in the version, take the 7th byte and perform an and operation using 0x0f, 
            // followed by an or operation with 0x40. 
            var seventhByte = bytes[6];
            seventhByte.doAndOperation([0, 0, 0, 0, 1, 1, 1, 1]);
            seventhByte.doOrOperation([0, 1, 0, 0, 0, 0, 0, 0]);
            // To put in the variant, take the 9th byte and perform an and operation using 0x3f, 
            // followed by an or operation with 0x80.
            var ninthByte = bytes[8];
            ninthByte.doAndOperation([0, 0, 1, 1, 1, 1, 1, 1]);
            ninthByte.doOrOperation([1, 0, 0, 0, 0, 0, 0, 0]);
            // Create the uuid string 
            return bytes[0].hexString + bytes[1].hexString + bytes[2].hexString + bytes[3].hexString + "-" +
                bytes[4].hexString + bytes[5].hexString + "-" + bytes[6].hexString + bytes[7].hexString + "-" +
                bytes[8].hexString + bytes[9].hexString + "-" + bytes[10].hexString + bytes[11].hexString +
                bytes[12].hexString + bytes[13].hexString + bytes[14].hexString + bytes[15].hexString;
        }
    }
});