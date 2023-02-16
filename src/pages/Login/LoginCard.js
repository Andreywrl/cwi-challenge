import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthProvider";
import localLogin from "../../services/localLogin";
import dragonLogo from "../../assets/Dragons.png";
import { Form, Formik } from "formik";
import ValidationSchema from "../../components/validation/ValidationSchema";
import LoginField from "../../components/LoginField";
import { useCallback } from "react";

export default function LoginCard() {

    const { signIn } = useAuth();

    const handleSubmit = useCallback((user, password) => {

        if (user && password) {

            const response = localLogin(user, password);

            if (response.success) {
                signIn(response.user);
            } else {
                alert(response.message);
            };

        };

    }, []);

    return (
        <div className="login_card">
            <img className="login-logo" src={dragonLogo} alt="Logo redonda na tela de login, contendo o texto 'Dragons'." />
            <p className="login_description">
                Conheça os mais incríveis dragões!
            </p>
            <Formik
                initialValues={{
                    user: '',
                    password: ''
                }}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                    handleSubmit(values.user, values.password)
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <LoginField user placeholder="Usuário" props={{ errors, touched }} />

                        <LoginField password placeholder="Senha" props={{ errors, touched }} />

                        <Button type="submit" className="login_button" onClick={() => handleSubmit()} text="Entrar" />
                    </Form>
                )}
            </Formik>
        </div>
    )


};