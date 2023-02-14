import { useEffect, useState } from "react"
import DragonHandler from "./DragonHandler";
import '../../styles/Dashboard.css';
import NoDragons from "./NoDragons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthProvider";
import { getDragons } from "../../services/Services";
import CreateDragon from "./CreateDragon";

export default function Dashboard() {

    const [dragonList, setDragonList] = useState([]);

    const { signOut } = useAuth();

    function refreshDragons() {
        getDragons()
            .then((response) => {
                setDragonList(response.data);
            })
            .catch((error) => {
                alert('Houve um erro! Contate o desenvolvedor.')
                console.log(error);
            });
    };

    useEffect(() => {
        refreshDragons();
    }, [])

    return (
        <div className="dashboard_container  bg-glass">
            <div className="dashboard_fixed">
                <h1>
                    Conheça os dragões mais incríveis
                </h1>
                <p>
                    Cuidado ao admirá-los, você pode acabar pegando fogo!
                </p>
                <button className="signOut-button" onClick={() => signOut()}>
                    <FontAwesomeIcon className="button-icon" icon={faRightFromBracket} />Sair
                </button>
            </div>
            {dragonList.length > 0 ?
                dragonList.map(obj => {
                    return <DragonHandler key={obj.id} dragon={obj} refresh={refreshDragons} />
                })
                :
                <NoDragons />
            }
            <CreateDragon />
        </div>
    )
};