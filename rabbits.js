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

function stringReverse(s) {
    return s.split("").reverse().join("");
}

function anagramClean(arr) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        arr1[i] = arr[i];
    }
    
    for (var i = 0; i < arr1.length; i++) {
        var word = arr1[i].toLowerCase().split("").sort().join("");
        for (var j = 0; j < arr1.length; j++) {
            var eqWord = arr1[j].toLowerCase().split("").sort().join("");
            if (arr1[j] != arr1[i] && word === eqWord) {
                arr1.splice(j, 1);
            }
        }
    }
    return arr1;
}

function getWeekDay(date) {
    switch (date.getDay()) {
        case 0: return "вс";
            break;
        case 1: return "пн";
            break;
        case 2: return "вт";
            break;
        case 3: return "ср";
            break;
        case 4: return "чт";
            break;
        case 5: return "пт";
            break;
        case 6: return "сб";
            break;
        default: return "something is wrong"
    }
}

function getSecFromStartOfDay() {
    var now = new Date();
    var start = new Date();
    start.setHours(0, 0, 0, 0);
    var diff = now - start;
    diff /= 1000;
    return diff;
}

function getSecToEndOfDay() {
    var now = new Date();
    var end = new Date();
    end.setHours(0, 0, 0, 0);
    end.setDate(end.getDate() + 1);
    var diff = end - now;
    diff /= 1000;
    return diff;
}

function formatDate(date) {
    var day = date.getDate();
    if (day < 10) day = "0" + day;
    var month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;
    var year = date.getFullYear();
    year = year % 100;
    if (year < 10) year = "0" + year;
    var result = day + "." + month + "." + year;
    return result;
}

function formatDiffDate(date) {
    var now = new Date();
    var diff = (now - date) / 1000;
    if (diff < 1) return "только что";
    else if (diff < 60) return diff + " сек. назад";
    else if (diff < 3600) return +(diff / 60) + " мин. назад";
    else return getFullDate(date);
}

function getFullDate(date) {
    var day = date.getDate();
    if (day < 10) day = "0" + day;
    var month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;
    var year = date.getFullYear();
    year = year % 100;
    if (year < 10) year = "0" + year;

    var hour = date.getHours();
    if (hour < 10) hour = "0" + hour;
    var min = date.getMinutes();
    if (min < 10) min = "0" + min;

    var result = day + "." + month + "." + year + " " + hour + ":" + min;
    return result;
}

function sum() {
    var a = 0;
    for (var i = 0; i < arguments.length; i++) {
        a += arguments[i];
    }
    alert(a);
    return a;
}

var calculator = {
    a: 0,
    b: 0,

    readValues: function () {
        this.a = prompt("Введите 1-е число", "0");
        this.b = prompt("Введите 2-е число", "0");
    },

    sum: function () {
        return +this.a + +this.b;
    },

    mul: function () {
        return +this.a * +this.b;
    }
}

function Summator() {
    var a;
    var b;

    this.sum = function(a, b) {
        return a + b;
    }

    this.run = function() {
        this.a = prompt("Введите 1-е число", "0");
        this.b = prompt("Введите 2-е число", "0");
        alert(this.sum(+this.a, +this.b));
    }
}

function Adder(startingValue) {
    this.value = startingValue;

    this.addInput = function () {
        var a = prompt("Сколько будем добавлять", "0");
        this.value += +a;
    }

    this.showValue = function () {
        alert(this.value);
    }
}

function outputDate(date) {
    if (date.getDate) {
        return formatDate(date);
    }
    if (typeof date == "string") {
        var a = Date.parse(date);
        return formatDate(new Date(a));
    }
    if (typeof date == "number") {
        return formatDate(new Date(date * 1000));
    }
    if (date.splice) {
        var a = new Date(date[0], date[1], date[2]);
        return formatDate(a);
    }
}

function printNumbersInterval() {
	var a = 0;
	var timerID = setInterval(function() {
		console.log(a);	
		a++;
		if (a > 20) { clearTimeout(timerID); }
	}, 100);
}

function printNumbersIntervalTimeOut() {
	var a = 0;
	var timerId = setTimeout(function run() {
		console.log(a);
		a++;
		if (a > 20) { clearTimeout(timerId); }
		else { timerId = setTimeout(run, 100); }
	}, 100);
}

function delay(f, ms) {
	return function() {
		var savedThis = this;
		var savedArgs = arguments;
 
		setTimeout(function() {
			f.apply(savedThis, savedArgs);
		}, ms);
	};
}

function debounce(f, ms) {
  var state = null;
  var COOLDOWN = 1;

  return function() {
    if (state) return;
    f.apply(this, arguments);
    state = COOLDOWN;
    setTimeout(function() { state = null }, ms);
  }
}

function bindLate(context, funcName) { 
  return function() {
    return context[funcName].apply(context, arguments);
  };
}

function Article() {
	if (Article.count == NaN || Article.count == undefined) Article.count = 0;
	Article.created = new Date();
	Article.count++;
}
Article.showStats = function() {
	var text = "Всего: " + this.count + ", Последняя: " + formatDate(this.created); 
	alert(text);
};

function getSums(arr) {
  var result = [];

  var totalSum = arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });
  result.push(totalSum);  

  return result;
}

function globalEval(code) { // объединим два способа в одну функцию
  window.execScript ? execScript(code) : window.eval(code);
}