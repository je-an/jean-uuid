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
                    console.log(id);
                }

            });
        });
        describe("Byte", function () {
            it("initialises successfully with an array", function () {
                var binaryArray = [0, 0, 0, 1, 1, 0, 1, 1],
                    binaryArray1 = [0, 0, 0, 0, 0, 0, 0, 1],
                    binaryArray2 = [1, 1, 1, 1, 1, 1, 1, 1];
                var b = new Uuid.Byte(binaryArray);
                expect(b).not.toBeUndefined();
                expect(b.binaryString).toEqual("00011011");
                expect(b.hexString).toEqual("1b");
                b = new Uuid.Byte(binaryArray1);
                expect(b.binaryString).toEqual("00000001");
                expect(b.hexString).toEqual("01");
                b = new Uuid.Byte(binaryArray2);
                expect(b.binaryString).toEqual("11111111");
                expect(b.hexString).toEqual("ff");
            });
        });
        describe("Byte.prototype.doAndOperation", function () {
            it("does binary AND", function () {
                var init = [0, 0, 0, 1, 1, 0, 1, 1],
                    andValues = [1, 0, 0, 1, 0, 0, 0, 1],
                    result = "00010001";
                var b = new Uuid.Byte(init);

                b.doAndOperation(andValues);
                expect(b.binaryString).toEqual(result);
            });
        });
        describe("Byte.prototype.doOrOperation", function () {
            it("does binary OR", function () {
                var init = [0, 0, 0, 1, 1, 0, 1, 1],
                    andValues = [1, 0, 0, 1, 0, 0, 0, 1],
                    result = "10011011";
                var b = new Uuid.Byte(init);

                b.doOrOperation(andValues);
                expect(b.binaryString).toEqual(result);
            });
        });
    });
});

