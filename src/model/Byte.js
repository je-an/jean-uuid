define([
    "Failure",
    "TypeCheck"
], function (
    Failure,
    TypeCheck
) {
        'use strict';
        var Byte = function (bits) {
            bits = TypeCheck.isArrayTypeOf(bits, "number") ? bits : Failure.throwTypeError("bits is not an number array");
            Object.defineProperties(this, {
                bits: {
                    get: function () {
                        return bits;
                    },
                },
                byteString: {
                    get: function () {
                        return this.getBinaryString();
                    },
                    set: function () {

                    }
                },
                hexString: {
                    get: function () {
                        return this.getHexString();
                    },
                    set: function () {

                    }
                }
            });
        };
        /** */
        Byte.prototype.getBinaryString = function () {
            var i = 0, bits = this.bits, length = bits.length, str = "";
            for (i = 0; i < length; i++) {
                str = str.concat(bits[i] === 1 ? "1" : "0");
            }
            return str;
        };
        /** */
        Byte.prototype.getHexString = function () {
            var hexString = parseInt(this.byteString, 2).toString(16);
            if (hexString.length < 2) {
                hexString = "0" + hexString;
            }
            return hexString;
        };
        return Byte;
    });