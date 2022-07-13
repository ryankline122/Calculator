"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(initial_value) {
        this.value = initial_value;
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    Calculator.prototype.multiply = function (x, y) {
        return x * y;
    };
    Calculator.prototype.divide = function (x, y) {
        return x / y;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
