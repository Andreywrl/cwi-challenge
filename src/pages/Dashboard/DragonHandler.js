import { faMagnifyingGlass, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomDescription from "../../components/CustomDescription";
import api from "../../services/api";
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

                <CustomDescription label="Data de criação: " data={dragon.createdAt} />

                <CustomDescription label="Nome: " input value={name} onChange={e => setName(e.target.value)} />

                <CustomDescription label="Tipo: " input value={name} onChange={e => setType(e.target.value)} />

                <CustomDescription label="Historias: " input value={histories} onChange={e => setHistories(e.target.value)} />

            </div>
            <div className="dragon_handler_buttons">
                <CustomButton className="button-view"
                    icon={faMagnifyingGlass}
                    data="Visualizar"
                    onClick={() => navigate(`/DragonDetails/${id}`)}
                />

                <CustomButton className="button-view"
                    icon={faPen}
                    data="Editar"
                    onClick={() => handleEditDragon()}
                />

                <CustomButton className="button-view"
                    icon={faTrash}
                    data="Excluir"
                    onClick={() => handleDeleteDragon()}
                />
            </div>
        </div>
    );
};