import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthProvider";
import localLogin from "../../services/localLogin";
import dragonLogo from "../../assets/Dragons.png";
import { Form, Formik } from "formik";
import ValidationSchema from "../../components/validation";
import LoginField from "../../components/LoginField";
import { useCallback } from "react";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

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
        <div className="login_card loading-transition">
            <img src={dragonLogo} alt="Logo redonda na tela de login, contendo o texto 'Dragons'." />
            <p className="description">
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

                        <Button icon={faRightToBracket} type="submit" className="login_button" onClick={() => handleSubmit()} text="Entrar" />
                    </Form>
                )}
            </Formik>
        </div>
    )


};