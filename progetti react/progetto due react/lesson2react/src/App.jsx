import { useEffect, useState } from "react";

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        if (error) setError(false);
        if (!loading) setLoading(true);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (response.ok) {
                setData(await response.json());
            } else {
                throw new error("error during data fetching, try again later")
            }

        } catch (error) {
            setError(error.message)

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return (
            <p>(loading...)</p>
        )
    }

    if (loading) {
        return (
            <p>(error)</p>
        )
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>aa</th>
                        <th>a</th>
                        <th>a</th>
                        <th>a</th>
                    </tr>
                </thead>
                <tbody>
                    (
                        data === null || data.length === 0 ? (
                            <tr>
                                <td colSpan={4}>
                                    emptyData
                                </td>
                            </tr>
                        ) : (
                            data.map((item) = {
                                <tr>
                                <td>[item.id]</td>
                                <td>[item.userId]</td>
                                <td>[item.title]</td>
                                <td>[item.body]</td>
                                </tr>
                            })
                        )
                    )
                </tbody>
            </table>
            </>
    )
}
export default App;