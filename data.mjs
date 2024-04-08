// data.mjs
export async function fetchRandomEmployees() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const shuffledData = shuffleArray(data);
        return shuffledData.slice(0, 5); // Return a subset of 5 random employees
    } catch (error) {
        console.error('Error fetching random employee data:', error);
        return [];
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
