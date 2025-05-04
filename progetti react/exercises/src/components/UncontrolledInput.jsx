const UncontrolledInput = () => {
    const handleUncontrolledInput = (event) => {
        event.preventDefault()
        const form = new FormData(event.target);
        const data = Object.fromEntries(form);
        console.log(data);


    }
    return (
        <>
            <form onSubmit={handleUncontrolledInput}>
                <input type="text" name="first_name"></input>
                <input type="text" name="last_name"></input>
                <button type="submit">Send</button>
            </form>
        </>
    )
}
export default UncontrolledInput;