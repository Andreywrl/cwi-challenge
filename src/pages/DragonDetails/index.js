import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import DragonInfo from "../../components/DragonInfo";
import LoadingScreen from "../../components/LoadingScreen";
import { getDragon } from "../../services/Services";
import '../../styles/DragonDetails.css';

export default function DragonDetails() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getDragon(id)
            .then(obj => {
                setData(obj.data);
                setIsLoading(false);
            })
            .catch(error => {
                alert("Houve um erro! Contate o desenvolvedor!")
                console.log(error);
                setIsLoading(false);
            })
    }, []);

    return (
        isLoading ?
            <LoadingScreen />
            :
            <div className='dragon-details-card loading-transition'>
                <h1>Detalhes do dragão {data.name}:</h1>
                <div className='inputs'>
                    <DragonInfo label={"Data de criação: "} data={data.createdAt} />
                    <DragonInfo label={"Nome: "} data={data.name} />
                    <DragonInfo label={"Tipo: "} data={data.type} />
                    <DragonInfo label={"Histórias: "} data={data.histories} />
                </div>
                <div className='buttons'>
                    <Button onClick={() => navigate('/')} icon={faHouse} text="Voltar" />
                </div>
            </div>
    )
};