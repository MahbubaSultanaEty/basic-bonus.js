function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments); // normally when you put more arguments than the parameter and console.log() them , the extra arguments won't show in the ouput. But if you "console.log(arguments)" , all the arguments will show in the output . The output will be an "array like object". 
}

add(22, 33);
add(34, 56, 89, 34);

