export const validateDescription =(description)=>{
    return description.length>0 && description.length<=200
}

export const validateDescriptionMessage='La descripcion no debe estar vacia y debe ser menor a 200 caracteres'