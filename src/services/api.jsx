import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/almacenadora/v1',
    timeout: 1000
})


export const addTask = async ({ nameTask, nameUser, description, dateEnd}) => {
    try {
        return await apiClient.post('/to-do/createToDo', { nameTask, dateEnd, nameUser, description}, { headers: { "Authorization": `Bearer ${localStorage.getItem('user')}` } });
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const login = async (data) => {
    console.log("data", data);
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}