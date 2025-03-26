async function sendPostRequest() {
    const url = 'https://api.example.com/endpoint'; 
    const data = {
        key1: 'value1',
        key2: 'value2'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


sendPostRequest();
