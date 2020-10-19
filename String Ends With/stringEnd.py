def solution(str, ending): #Create a function that takes two string arguments
    return str.endswith(ending) #Use endswith method to return a boolean value based on if the string ends with the ending given.  

print(solution("hello", "lo"))