"use strict";
exports.__esModule = true;
exports.employee = exports.getJsonColors = exports.getColors = void 0;
var getColors = function () {
    return ['red', 'green', 'blue'];
};
exports.getColors = getColors;
var getJsonColors = function () {
    var JsonColor = {
        color: 'red',
        Width: 200
    };
    return JsonColor;
};
exports.getJsonColors = getJsonColors;
var employee = {
    name: 'Madhu',
    loc: 77067,
    details: function () {
    }
};
exports.employee = employee;
