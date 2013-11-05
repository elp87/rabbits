function count_rabbits() {
    for (var i = 1; i <= 3; i++) {
        alert("Кролик номер " + i)
    }
}

function isInteger(num) {
    if (num % 1 == 0) return true;
    else return false;
}

function pow(x, n) {
    var value = x;
    for (var i = 1; i < n; i++) {
        value *= x;
    }
    return value;
}

function calcFibonacci(x) {
    if (x == 1) return 1;
    else return (x + calcFibonacci(x - 1));
}

function fib(x) {
    var fi = (1 + Math.sqrt(5)) / 2;
    var result = pow(fi, x) / Math.sqrt(5);
    return Math.round(result);
}

function f(x) {
    var a = 1;
    var b = 1;
    var c;
    for (var i = 0; i < x; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return c;
}

function upperFirstChar(str) {
    var result = str.charAt(0).toUpperCase();
    for (var i = 1; i < str.length; i++) {
        result += str.charAt(i);
    }
    return result;
}

function checkSpam(str) {
    var result;
    str = str.toLowerCase();
    if (str.indexOf('viagra') != -1 || str.indexOf('xxx') != -1) result = true;
    else result = false;
    alert(result);
}

function product(x, y) {
    return (x + y);
}

function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

function filter(arr, a, b) {
    var newArray = [];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] >= a) && (arr[i] <= b)) {
            newArray[index] = arr[i];
            index++;
        }
    }
    return newArray;
}

function camelize(str) {
    var arr = str.split("-");
    for (var i = 1; i < arr.length; i++) {
        arr[i] = upperFirstChar(arr[i]);
    }
    var newStr = arr.join("");
    return newStr;
}

function removeClass(obj, str) {
    var array = obj.className.split(" ");
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] == str) array.splice(i, 1);
    }
    var cln = array.join(" ");
    obj.className = cln;    
}

function sornNew(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    newArr.sort();
    return newArr;
}