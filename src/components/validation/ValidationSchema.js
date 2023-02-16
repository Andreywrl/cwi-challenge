import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    user: Yup
        .string()
        .required('O campo de email é necessário para acessar sua conta!'),
    password: Yup
        .string()
        .min(5, 'Sua senha deve conter ao menos 5 caracteres!')
        .required('O campo de senha é necessário para acessar sua conta!'),
});

export default ValidationSchema;