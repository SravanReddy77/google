var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_value = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval);
var ob = new Numbers;
console.log("Global num" + ob.num_value);
