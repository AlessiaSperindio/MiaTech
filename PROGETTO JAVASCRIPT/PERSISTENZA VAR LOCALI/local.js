let result = {
    first: "pasta",
    second: "fish",
} ;
let initialValue = result.first;
let x= 2;
let y = 1;
function outerFunction (x,initialValue,)
{
    return function innerFunction (y,result){
        return (y,result);
    };
};

console.log(result.first);
outerFunction(result);
console.log(result.first);
