// app.mjs
import { fetchRandomEmployees } from './data.mjs';
import { postUser } from './helper.mjs';

async function initApp() {
    try {
        const employees = await fetchRandomEmployees();
        employees.forEach(employee => postUser(employee));
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

initApp();
