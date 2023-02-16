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
        <div className="dragon_handler_card">
            <div className="dragon_handler_content">

                <DragonDescription label="Data de criação: " data={dragon.createdAt} />

                <DragonDescription label="Nome: " input value={name} onChange={e => setName(e.target.value)} />

                <DragonDescription label="Tipo: " input value={type} onChange={e => setType(e.target.value)} />

                <DragonDescription label="Historias: " input value={histories} onChange={e => setHistories(e.target.value)} />

            </div>
            <div className="dragon_handler_buttons">
                <Button className="button-view"
                    icon={faMagnifyingGlass}
                    text="Visualizar"
                    onClick={() => navigate(`/DragonDetails/${id}`)}
                />

                <Button className="button-view"
                    icon={faPen}
                    text="Editar"
                    onClick={() => handleEditDragon()}
                />

                <Button className="button-view"
                    icon={faTrash}
                    text="Excluir"
                    onClick={() => handleDeleteDragon()}
                />
            </div>
        </div>
    );
};