// jscs:disable
// jshint ignore:start
define([
    "Uuid"
], function (Uuid) {
    describe('Uuid.spec.js', function () {
        describe("Uuid", function () {
            it("generates a uuid", function () {
                //var id = Uuid._create();
                var i, id;
                for (i = 0; i < 1000; i++) {
                    id = Uuid.generate();
                    expect(typeof id === "string").toBe(true);
                    expect(id.length).toEqual(36);
                }

            });
        });
        describe("Byte", function () {
            it("initialises successfully with an array", function () {
                var binaryArray = [0, 0, 0, 1, 1, 0, 1, 1],
                    binaryArray1 = [0, 0, 0, 0, 0, 0, 0, 1],
                    binaryArray2 = [1, 1, 1, 1, 1, 1, 1, 1];
                var b = new Uuid.Byte(binaryArray);
                expect(b.byteString).toEqual("00011011");
                expect(b.hexString).toEqual("1b");
                b = new Uuid.Byte(binaryArray1);
                expect(b.byteString).toEqual("00000001");
                expect(b.hexString).toEqual("01");
                b = new Uuid.Byte(binaryArray2);
                expect(b.byteString).toEqual("11111111");
                expect(b.hexString).toEqual("ff");
            });
        });
    });
});

