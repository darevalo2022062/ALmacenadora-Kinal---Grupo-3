import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask as addTaskRequest } from "../../services/api";
import toast from 'react-hot-toast'

export const useAddTask = () => {
    const [isLoading, setIsLoading] = useState(false);

    const addTask = async (nameTask, description, dateEnd) => {
        setIsLoading(true);
        console.log("LocalStorage: "+localStorage.getItem('name'));
        let nameUser = JSON.parse(localStorage.getItem('name'));
        const response = await addTaskRequest({ nameTask, nameUser, description, dateEnd });
        toast.success("Tarea agregada con exito")
        setIsLoading(false);

        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al agregar tarea'
            )
        }

    }
    return {
        addTask,
        isLoading
    }
}