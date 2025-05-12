import ShowCounter from "./assets/components/ShowCounter";
import useFetch from "./assets/components/hooks/useFetch"


const App = () => {
    return (
        <>
        <useFetch/>
            <ShowCounter></ShowCounter>
        </>
    )
}
export default App;