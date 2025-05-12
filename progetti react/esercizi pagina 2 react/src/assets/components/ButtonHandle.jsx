const ButtonHandle =()=>{

    const handleClick = () => {
        console.log("click on button");
    }

    const handleInput = (event) => {
console.log(event.target.value);
    }

    const handleChange = (event) => {
console.log(event.target.value);
    }
    return(
        <>
        <button onClick={handleClick}>click</button>
        <input type="text" onInput={handleInput}/>
        <select onChange={handleChange}>
            <option value="one">{handleInput}</option>
            <option value="two">{handleClick}</option>
            <option value="three">{handleChange}</option>
        </select>
        </>
    )
}
export default ButtonHandle;
