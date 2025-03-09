
function innerfunction(initialvalue){
    let result=initialvalue
    function outerfunction (y)
    {
    return result+y
    }
    console.log(result);
    return outerfunction}
    
    let ok=innerfunction(4);
    console.log(ok(4));