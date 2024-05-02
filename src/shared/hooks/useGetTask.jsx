import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks as getTasksRequest } from "../../services/api";
import toast from 'react-hot-toast'


export const useGetTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getTasks = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await getTasksRequest();
            console.log("response data funka?", response.data);
            if (response.error) {
                throw new Error(response.e?.response?.data || 'Ocurrió un error al obtener las tareas');
            }
            setTasks(Array.isArray(response.data) ? response.data : (response.data ? [response.data] : []));
            console.log("tasks data", tasks);
        } catch (e) {
            setError(e);
            toast.error(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        tasks,
        getTasks,
        isLoading,
        error
    };
};