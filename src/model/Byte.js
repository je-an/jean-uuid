define([

], function () {
    'use strict';
    var Byte = function (value) {
        this.value = value;
    };
    /** */
    Byte.prototype.getHexValue = function () {
        var i = 0, value = this.value, length = value.length;
        for (i = 0; i < length; i++) {
            
        }
        var v = this.value.join();
        return v;
    };
    return Byte;
});