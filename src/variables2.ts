var global_num = 12
class Numbers {
    num_value = 13;
    static sval = 10;
    storeNum(): void {
        var local_num = 14;
    }
}
console.log("Global num: " +global_num)
console.log(Numbers.sval)
var ob = new Numbers;
console.log("Global num" + ob.num_value)