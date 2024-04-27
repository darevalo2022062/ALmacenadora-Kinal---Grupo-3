import axios from 'axios';

const apiClient = axios.create({
    baseURL:'http://127.0.0.1:8080/almacenadora/v1',
    timeout:1000
})
export const addTask=async (data)=>{
    try {
        return await apiClient.post('/to-do/createToDo',data);
    } catch (e) {
        return{
            error:true,
            e
        }
    }
}