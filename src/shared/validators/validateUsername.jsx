export const validateEmail = (username) => {
    const regex = /^\S{5,15}$/
    return regex.test(username)
}

export const emailValidationMessage = "El nombre de usuario debe tener entre 3 y 8 caracteres."