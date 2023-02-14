import { useState } from "react"
import CustomButton from "../../components/CustomButton";
import { useAuth } from "../../contexts/AuthProvider";
import localLogin from "../../services/localLogin";

export default function LoginCard() {

    const { signIn } = useAuth();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {

        if (user !== '' && password !== '') {

            const response = localLogin(user, password);

            if (response.success) {
                signIn(response.user);
            } else {
                alert(response.message);
            };

        } else {
            alert('Por favor, preencha todos os campos para acessar sua conta!');
        };
    };

    return (
        <div className="login_card bg-glass">

            <h1 className="login_title">
                LOGIN
            </h1>
            <p className="login_description">
                Conheça os mais incríveis dragões
            </p>

            <input className="login_field" placeholder="Usuário" type="email" value={user} onChange={e => setUser(e.target.value)} />

            <input className="login_field" placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <CustomButton className="login_button" onClick={() => handleSubmit()} data="Entrar" />
        </div>
    )


};