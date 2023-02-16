
export function saveUserCredentials(userData) {
    localStorage.setItem('cwi-challenge-user', userData);
};

export function getUserCredentials() {
    const userData = localStorage.getItem('cwi-challenge-user');
    return { userData };
};

export function deleteItemFromLocalStorage() {
    localStorage.removeItem('cwi-challenge-user');
};