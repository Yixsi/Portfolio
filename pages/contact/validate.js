const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validate = (data) => {
    const errors = {}

    if (data.name && data.name.length > 70) errors.name = 'Number of characters exceeded'; 
    
    
    if (data.email && !regEmail.test(data.email)) errors.email = 'The email has an invalid format';

    if(!data.message.length && data.message.length > 1000) errors.message = true;

    return errors;
}
