// jscs:disable
// jshint ignore:start
define([
    "Uuid"
], function (Uuid) {
    describe('Uuid.spec.js', function () {
        var instance;
        beforeEach(function () {
            instance = new Uuid();
        });
        describe("Uuid", function () {
            it("generates a uuid", function () {
                //var id = Uuid._create();
                var id = Uuid._bin();
            });
        });
    });
});

