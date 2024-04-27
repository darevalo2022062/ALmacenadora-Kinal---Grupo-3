export const validateNameTask=(nameTask)=>{
    return nameTask.length>=5 && nameTask.length<=50
}

export const validateNameTaskMessage ='El nombre de la tarea debe ser entre 5 y 50 caracteres'