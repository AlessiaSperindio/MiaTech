

import { useFetch } from "../src/hooks/useFetch";

const url = "https://jsonplaceholder.typicode.com/comments";

const App = () => {
    const { data } = useFetch(url, { method: "GET" });
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>postId</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>

                </thead>

                <tbody>
                    {data === null || data.length === 0 ? (
                        <tr>
                            <td colSpan={4}>
                                empty data
                            </td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.postId}>


                                <td>{item.postId}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))
                    )
                    }

                </tbody>
            </table>
        </>)
}
export default App;
