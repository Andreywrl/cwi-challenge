import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomDragonDetail from "../../components/CustomDragonDetail";
import { getDragon } from "../../services/Services";
import '../../styles/DragonDetails.css';

export default function DragonDetails() {

    const [data, setData] = useState({});

    const { id } = useParams(); 
    const navigate = useNavigate(); 

    useEffect(() => {
        getDragon(id)
            .then(obj => {
                setData(obj.data);
            })
            .catch(error => {
                alert("Houve um erro! Contate o desenvolvedor!")
                console.log(error);
            })
    }, []);

    return (
        <div className='dragon-details-card bg-glass'>
            <h1 className="title">Detalhes do dragão {data.name}:</h1>
            <div className='dragon-details-inputs'>
                <CustomDragonDetail label={"Data de criação: "} data={data.createdAt} />
                <CustomDragonDetail label={"Nome: "} data={data.name} />
                <CustomDragonDetail label={"Tipo: "} data={data.type} />
                <CustomDragonDetail label={"Histórias: "} data={data.stories} />
            </div>
            <div className='dragon-details-buttons'>
                <CustomButton onClick={() => navigate('/')} icon={faHouse} data="Voltar" />
            </div>
        </div>
    )
};