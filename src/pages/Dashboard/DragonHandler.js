import { faMagnifyingGlass, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import DragonDescription from "../../components/DragonDescription";
import { deleteDragon, putDragon } from "../../services/Services";

export default function DragonHandler({ dragon, refresh }) {

    const id = dragon.id;

    const [name, setName] = useState(dragon.name);
    const [type, setType] = useState(dragon.type);
    const [histories, setHistories] = useState(dragon.histories);

    const navigate = useNavigate();

    function handleEditDragon() {

        putDragon(id, {
            name,
            type,
            histories
        })
            .then(() => {
                alert('Dragão editado com sucesso!');
                refresh();
            })
            .catch((error) => {
                alert('Houve um erro! Contate o desenvolvedor.')
                console.log(error);
            });
    };

    function handleDeleteDragon() {

        deleteDragon(id)
            .then(() => {
                alert(`Dragão de nome ${name} e ID ${id} deletado com sucesso!`);
                refresh();
            })
            .catch((error) => {
                alert('Houve um erro! Contate o desenvolvedor.')
                console.log(error);
            });
    };

    return (
        <div className="dragon_card">
            <div>

                <DragonDescription label="Data de criação: " data={dragon.createdAt} />

                <DragonDescription label="Nome: " input value={name} onChange={e => setName(e.target.value)} />

                <DragonDescription label="Tipo: " input value={type} onChange={e => setType(e.target.value)} />

                <DragonDescription label="Historias: " input value={histories} onChange={e => setHistories(e.target.value)} />

            </div>
            <div className="buttons">

                <Button
                    icon={faTrash}
                    text="Excluir"
                    onClick={() => handleDeleteDragon()}
                />

                <Button
                    icon={faPen}
                    text="Editar"
                    onClick={() => handleEditDragon()}
                />

                <Button
                    icon={faMagnifyingGlass}
                    text="Visualizar"
                    onClick={() => navigate(`/DragonDetails/${id}`)}
                />

            </div>
        </div>
    );
};