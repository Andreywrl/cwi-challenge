import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    user: Yup
        .string()
        .required('O campo de Usuário é necessário para acessar sua conta!'),
    password: Yup
        .string()
        .required('O campo de senha é necessário para acessar sua conta!'),
});

export default ValidationSchema;