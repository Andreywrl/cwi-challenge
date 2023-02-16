import userCredentials from '../data/userCredentials.json';

export default function localLogin(user, password) {

    if (user && password) {
        if (user !== userCredentials.user || password !== userCredentials.password) {
            return {
                "error": true,
                "message": "Usuário ou senha incorretos, tente novamente!"
            };
        } else {
            return {
                "success": true,
                "user": {
                    "id": 1,
                    "name": "tester",
                    "token": "1a2b3c4d5e"
                },
            };
        };
    };
};