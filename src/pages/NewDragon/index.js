import { faBroom, faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputCreate from "../../components/InputCreate";
import { createDragon } from "../../services/Services";
import '../../styles/NewDragon.css';

export default function NewDragon() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [stories, setStories] = useState('');

    const navigate = useNavigate();

    async function handleCreate() {
        await createDragon({
            histories: stories,
            name,
            type,
        })
            .then(() => {
                alert('Dragão criado com sucesso!');
                navigate('/');
            })
            .catch(error => {
                alert('Houve um erro! Entre em contato com o desenvolvedor');
                console.log(error);
            });

    };

    function handleReset() {
        setName('');
        setType('');
        setStories('');
    };

    return (
        <div className='new-dragon-card bg-glass loading-transition'>
            <h1 className="title">Hora de gerar seu dragão!</h1>
            <div className='inputs'>

                <InputCreate label="Nome: " value={name} onChange={e => setName(e.target.value)} />

                <InputCreate label="Tipo: " value={type} onChange={e => setType(e.target.value)} />

                <InputCreate label="Histórias: " value={stories} onChange={e => setStories(e.target.value)} />

            </div>
            <div className='buttons'>

                <Button onClick={() => navigate('/')} icon={faHouse} text="Voltar" />

                <Button onClick={() => handleReset()} icon={faBroom} text="Limpar" />

                <Button onClick={() => handleCreate()} icon={faPlus} text="Criar" />

            </div>
        </div>
    )
};