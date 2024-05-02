
/* " En la carpeta src, crea un nuevo
archivo llamado ListaTareas.jsx. En este archivo, crea un componente llamado ListaTareas que
renderice una lista de elementos. Usa el estado de React para almacenar los elementos de la
lista (Array)." */

import React, { useEffect } from 'react';
import { useGetTasks } from '../shared/hooks/useGetTask';
import { useDeleteTask } from '../shared/hooks/useDeleteTask';


export const ListaTareas = () => {
    const { tasks, getTasks, isLoading, error } = useGetTasks();
    const { deleteTask } = useDeleteTask();
    console.log("tasks JSX", tasks);

    useEffect(() => {
        getTasks();
    }, []);

    //console.log({ tasks, isLoading, error }, 'ListaTareas.jsx');

    const handleDeleteTask = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('data-id');
        deleteTask(id).then(() => getTasks());
    }

    return (
        <div>
            <h1 className='title-list'>Lista de Tareas</h1>
            {isLoading ? (
                <p>Cargando tareas...</p>
            ) : error ? (
                <p>Hubo un error al cargar las tareas: {error.message}</p>
            ) : (
                <ul>
                    {tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>
                            <h2>Tareas Principales</h2>
                            <ul>
                                {task.toDo.map((item, itemIndex) => (
                                    <li key={item._id}>
                                        {item.nameTask} - 
                                        Estado: {item.status ? 'Completada' : 'Pendiente'} - 
                                        Comienza: {item.dateBegin} - 
                                        Termina: {item.dateEnd} - 
                                        User: {item.nameUser} - 
                                        <button data-id={item._id} onClick={handleDeleteTask}>Eliminar</button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
    

};