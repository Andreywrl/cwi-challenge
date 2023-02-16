import api from "./api";

/* Retorna todos dragões: */
export function getDragons() {
    return api.get();
};

/* Retorna um dragão: */
export function getDragon(id) {
    return api.get(id);
};

/* Edita um dragão: */
export function putDragon(id, data) {
    return api.put(id, data)
};

/* Deleta um dragão: */
export function deleteDragon(id) {
    return api.delete(id)
};

/* Cria um dragão: */
export function createDragon(data) {
    return api.post('/', data)
};