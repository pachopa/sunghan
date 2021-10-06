//Global vs. local scope in functions

var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());


//return a value from a function with return 

function minusseven(num) {
    return num - 7;
}

console.log(minusSeven(10));

//Understanding undefined value returend from a function 

var sum = 0;
function addThree() {
    sum = sum + 3;
}

//assingment with a returend value 

var changed = 0;
function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

//stand in line 

function nextInLine(arr, item) {
    return item;
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before" + JSON.stringify(testARR));


//boolean values

function welcomeToBooleans() {
    return false;
}
//use conditional logic with if statements
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "yes. it's true";
    }
    return "no, it's false";
}

// compairson with the equality operator 

function testEqual(val) {
    if (val == 12) {
        return "equal";

    }
    return "not Equal";
}
console.log(testEqual(10));

//compairson with the strict equality operator 

function testStrict(val) {
    if (val == 7) {
        return "equal":

    }
    return "not equal";
}
testStrict(10);

// practice comparing different values 


function compareEquality(a, b) {
    if (a == b) {
        return "equal";

    }
    return "not equal";
}

console.log(compareEquality(10, "10"));
// compairson with the inequality operator 

function testNotEqual(val) {
    if (val !== 99) {
        return "not equal";
    }
    return "equal";
}

console.log(testNotEqual(10));

//compairson with the strict inequality operator

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "not equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));

//compairosn with the logical and operator 

function testGreaterThan(val) {
    if (val > 100) {
        return "over 100";
    }
    if (val > 10) {
        return "over 10";

    }
    return "10 or Under";
}

console.log(testGreaterThan(10));

//compairson with the greater than or equal operator 

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or over";
    }
    return "less than 10 ";
}

console.log(testGreaterOrEqual(10));

//compairson with the less than operator 

function testLessThan(val) {
    if (val < 25) {
        return "under 25";

    }
    if (val < 55) {
        return "under 55";

    }
    return "55 or over";
}

console.log(testLessThan(10));

//comparison with the less than or equal to operator

function testLessOrEqual(val) {
    if (val) {
        return "smaller than or equal to 12 ";
    }
    if (val) {
        return "smaller than or equal to 24";
    }
    return "more than 24 ";
}

console.log(testLessOrEqual(10));
//sept 19 15 daechul
//comparisons with the logical and operator 

function testLogicalAnd(val) {
    if (val <= 50 && (val >= 25) {
        return "yes";



    }
    return "no";

}

testLogicalAnd(10);

//comparisons with the logical or operator

if (val < 10) {
    return "outside";
}
if (val > 20) {
    return "outside";

}

return "insdie"

}

//else statements 

function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "bigger than 5 ";
    } else {
        result = "5 or smaller";
    }

}
return result;
}
testElse(4);

// else if statements 

function testElseIf(val) {
    if (val > 10) {
        return "greater than 10 ";
    } else if (val < 5) {
        return "smaller than 5";
    } else {

        return "between 5 and 10 ";
    }


}

testElseIf(7);

// logical orders in if else statements 

function orderMyLogic(val) {
    if (val < 10) {
        return "less than 10";
    } else if (val < 5) {
        return "less than 5";

    } else {
        return "greater than or equal to";

    }
}

console.log(orderMyLogic(3));

//chaining if else statements

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "medium";
    }

    return "change me";
}

testSize(7);

//gold code 

var names = ["hole-in-one!", "eagle", "birdie", "par", "bogey", "double bogey"];
function golfScore(par, strokes) {
    // strokes === 4;
    // par === 5
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        //4     <= 3 = 5 - 2
        return names[1];
    }
    return "change me";
}

golfScore(5, 4);

//switch statements

function caseInSwitch(val) {
    var answer = "";
    swotch(val) {
        case 1:
        answer = "alpha";
        break;
        case 2:
        answer = "beta";
        break;
    } case 3 :
    answer = "delta";
    break;
}

console.log(caseInSwitch(1));

// default option in swtich statements 

function swtichOfStuff(val) {
    var answer = "";
        case "a":
    answer = "apple";
    break;
            case "b":
    answer = "bird";
    break;
                    case "c";
    answer = "cat";
    break;

}

return answer;
}


console.log(swtichOfStuff(2));




//multiple indentical options in switch statements

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
                answer "mid";
            break;

        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}

console.log(sequentialSizes(1));
