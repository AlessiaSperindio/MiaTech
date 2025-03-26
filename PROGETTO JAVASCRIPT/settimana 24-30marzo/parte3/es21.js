async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        
        if (!response.ok) {
            throw new Error(`Errore: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error('Si è verificato un errore:', error.message); 
    }
}


fetchData('https://jsonplaceholder.typicode.com/posts/1');