export const validateName=(name)=>{
    return name.length>0 && name.length<=150
}

export const validateNameMessage='El nombre de la persona a cargo debe ser mayor a 0 y menor a 150 caracteres'