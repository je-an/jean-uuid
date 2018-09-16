// jscs:disable
// jshint ignore:start
define([
    "Uuid",
    "Performance"
], function (Uuid, Performance) {
    Performance.configure({
        measurementUnit: Performance.measurementUnit.SECONDS
    });
    describe('Uuid.spec.js', function () {
        describe("Uuid.generate", function () {
            it("generates a uuid", function () {
                //var id = Uuid._create();
                var i, id, regex = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
                for (i = 0; i < 1000; i++) {
                    Performance.startMeasurement();
                    id = Uuid.generate();
                    Performance.stopMeasurement();
                    expect(regex.test(id)).toBe(true);
                }
            });
        });
        var binaryArray = [0, 0, 0, 1, 1, 0, 1, 1],
            binaryArray1 = [0, 0, 0, 0, 0, 0, 0, 1],
            binaryArray2 = [1, 1, 1, 1, 1, 1, 1, 1];
        describe("Byte", function () {
            it("initialises successfully with an array", function () {
                var b = new Uuid.Byte(binaryArray);
                expect(b).not.toBeUndefined();
            });
            it("throws error, if no number array is provided", function () {
                try {
                    b = new Uuid.Byte(undefined);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
        describe("Byte.prototype.getBinaryString", function () {
            it("provides the binary value as string", function () {
                var b = new Uuid.Byte(binaryArray);
                expect(b.binaryString).toEqual("00011011");
                b = new Uuid.Byte(binaryArray1);
                expect(b.binaryString).toEqual("00000001");
                b = new Uuid.Byte(binaryArray2);
                expect(b.binaryString).toEqual("11111111");
            });
        });
        describe("Byte.prototype.getHexString", function () {
            it("provides the hex value as string", function () {
                var b = new Uuid.Byte(binaryArray);
                expect(b.hexString).toEqual("1b");
                b = new Uuid.Byte(binaryArray1);
                expect(b.hexString).toEqual("01");
                b = new Uuid.Byte(binaryArray2);
                expect(b.hexString).toEqual("ff");
            });
        });
        describe("Byte.prototype.doAndOperation", function () {
            var init = [0, 0, 0, 1, 1, 0, 1, 1],
                andValues = [1, 0, 0, 1, 0, 0, 0, 1],
                result = "00010001", b;
            beforeEach(function () {
                b = new Uuid.Byte(init);
            });
            it("does binary AND", function () {
                b.doAndOperation(andValues);
                expect(b.binaryString).toEqual(result);
            });
            it("throws error, if an array without numbers is provided", function () {
                try {
                    b.doAndOperation(undefined);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("throws error, if an array with a length bigger then 8 is provided", function () {
                try {
                    b.doAndOperation([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
        describe("Byte.prototype.doOrOperation", function () {
            var init = [0, 0, 0, 1, 1, 0, 1, 1],
                andValues = [1, 0, 0, 1, 0, 0, 0, 1],
                result = "10011011", b;
            beforeEach(function () {
                b = new Uuid.Byte(init);
            });
            it("does binary OR", function () {
                b.doOrOperation(andValues);
                expect(b.binaryString).toEqual(result);
            });
            it("throws error, if an array without numbers is provided", function () {
                try {
                    b.doOrOperation(undefined);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("throws error, if an array with a length bigger then 8 is provided", function () {
                try {
                    b.doOrOperation([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
    });
});

