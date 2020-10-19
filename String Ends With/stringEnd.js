function solution(str, ending) { //Create a function that takes a string, and the ending as parameters.
    if (str.endsWith(ending)) { //If the string ends with the given ending...
        return true; //Return true.
    } else { //Else...
        return false; //Return false.
    }
};

function anotherSolution(str, ending) {
    return str.endsWith(ending); 
};

console.log(solution("hello", "lo"));
console.log(anotherSolution("hello", "lo")); 