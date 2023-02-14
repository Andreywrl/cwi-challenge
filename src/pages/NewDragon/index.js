import { faBroom, faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomCreate from "../../components/CustomCreate";
import api from "../../services/api";
import '../../styles/NewDragon.css';

export default function NewDragon() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [stories, setStories] = useState('');

    const navigate = useNavigate();
    const histories = '';

    async function handleCreate() {
        await api.post('/', {
            histories,
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
        <div className='new-dragon-card bg-glass'>
            <h1 className="title">Hora de gerar seu dragão!</h1>
            <div className='new-dragon-inputs'>

                <CustomCreate label="Nome: " value={name} onChange={e => setName(e.target.value)} />

                <CustomCreate label="Tipo: " value={type} onChange={e => setType(e.target.value)} />

                <CustomCreate label="Histórias: " value={stories} onChange={e => setStories(e.target.value)} />

            </div>
            <div className='new-dragon-buttons'>

                <CustomButton onClick={() => handleCreate()} icon={faPlus} data="Criar" />

                <CustomButton onClick={() => handleReset()} icon={faBroom} data="Limpar" />

                <CustomButton onClick={() => navigate('/')} icon={faHouse} data="Voltar" />

            </div>
        </div>
    )
};