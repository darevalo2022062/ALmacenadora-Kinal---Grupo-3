
/* " En la carpeta src, crea un nuevo
archivo llamado ListaTareas.jsx. En este archivo, crea un componente llamado ListaTareas que
renderice una lista de elementos. Usa el estado de React para almacenar los elementos de la
lista (Array)." */

import { useEffect } from 'react';
import { useGetTasks } from '../shared/hooks/useGetTask';
import { useDeleteTask } from '../shared/hooks/useDeleteTask';
import { useUpdateTask } from '../shared/hooks/useUpdateTask';


export const ListaTareas = () => {
    const { tasks, getTasks, isLoading, error } = useGetTasks();
    const { updateTask } = useUpdateTask();
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

    const handleUpdateTask = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('data-id');
        updateTask(id).then(() => getTasks());
        event.target.checked = true;
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
                                        <input type="checkbox" checked={item.status} data-id={item._id} onClick={handleUpdateTask} />
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