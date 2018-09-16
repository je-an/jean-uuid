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
                    set: function (value) {
                        bits = TypeCheck.isArrayTypeOf(value, "number") ? value : Failure.throwTypeError("value is not an number array");
                    }
                },
                binaryString: {
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
            var i = 0, bits = this.bits, length = bits.length, result = [];
            for (i = 0; i < length; i++) {
                result[i] = (bits[i] === 1) ? "1" : "0";
            }
            return result.join("");
        };
        /** */
        Byte.prototype.getHexString = function () {
            var hexString = parseInt(this.binaryString, 2).toString(16);
            if (hexString.length < 2) {
                hexString = "0" + hexString;
            }
            return hexString;
        };
        /** @param {Number[]} bits - the bits for the and operation  */
        Byte.prototype.doAndOperation = function (bits) {
            var i;
            if (!TypeCheck.isArrayTypeOf(bits, "number") || !bits.length === 8) {
                Failure.throwTypeError("bits is not an number array or its length is not 8");
            }
            for (i = 0; i < 8; i++) {
                this.bits[i] = this.bits[i] & bits[i];
            }
        };
        /** @param {Number[]} bits - the bits for the or operation  */
        Byte.prototype.doOrOperation = function (bits) {
            var i;
            if (!TypeCheck.isArrayTypeOf(bits, "number") || !bits.length === 8) {
                Failure.throwTypeError("bits is not an number array or its length is not 8");
            }
            for (i = 0; i < 8; i++) {
                this.bits[i] = this.bits[i] | bits[i];
            }
        };
        return Byte;
    });