function fiboEvenSum(n) {
    var result;
    var a = 0;
    var b = 1;
    let addingNumber = 0;
    for (var i = 1; i <= n; i++) {
        result = a + b; // 0 1 = 1
        a = b;
        b = result; //2

        if (result <= n) {
            if (result % 2 == 0) {
                addingNumber += result;
            }
        }
    }
    return addingNumber;
}
fiboEvenSum(10);