export const validateLastName =(lastName)=>{
    return lastName.length>=1 && lastName.length<=100;
}

export const validateLastNameMessage='Los apellidos tienen que ser entre 2 y 100 caracters'