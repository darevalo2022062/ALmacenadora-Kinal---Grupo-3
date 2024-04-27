import { useState } from "react";  
import { useNavigate } from "react-router-dom";
import { addTask as addTaskRequest } from "../../services/api";
import toast from 'react-hot-toast'

export const useAddTask =()=>{
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const addTask =async( nameTask, status, dateBegin, dateEnd, nameUser, description)=>{
        setIsLoading(true);
        const response = await addTaskRequest({ nameTask, status, dateBegin, dateEnd, nameUser, description});
        setIsLoading(false);

        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al agregar tarea'
            )
        }
        navigate('/')
    }
    return{
        addTask,
        isLoading
    }
}