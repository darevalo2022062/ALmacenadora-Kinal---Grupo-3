export const validateFirstName =(firstName)=>{
    return firstName.length>=2 && firstName.length<=100;
}

export const validateFirstNameMessage='Los apellidos tienen que ser entre 2 y 100 caracters'