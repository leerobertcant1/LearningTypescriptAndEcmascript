"use strict";
exports.__esModule = true;
document.addEventListener("DOMContentLoaded", function (event) {
    var text = "TS Page Loaded";
    new Index().writeToConsole(text);
});
var Index = /** @class */ (function () {
    function Index() {
    }
    Index.prototype.writeToConsole = function (data) {
        console.log(data);
    };
    return Index;
}());
