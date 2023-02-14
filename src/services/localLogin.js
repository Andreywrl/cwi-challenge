export default function localLogin(user, password) {

    const rightUser = 'tester';
    const rightPass = 't35t3r';

    if (user !== rightUser || password !== rightPass) {
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