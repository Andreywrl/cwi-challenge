import { useCallback, useEffect, useMemo, useState } from "react"
import DragonHandler from "./DragonHandler";
import '../../styles/Dashboard.css';
import NoDragons from "./NoDragons";
import { getDragons } from "../../services/Services";
import CreateDragon from "./CreateDragon";
import LoadingScreen from "../../components/LoadingScreen";

export default function Dashboard() {

    const [isLoading, setIsLoading] = useState(true);
    const [dragonList, setDragonList] = useState([]);

    const refreshDragons = useCallback(async () => {
        await getDragons()
            .then((response) => {
                let data = response.data;
                let sorted_data = data.sort((a, b) => a.name.localeCompare(b.name));;
                setDragonList(sorted_data);
                setIsLoading(false);
            })
            .catch((error) => {
                alert('Houve um erro! Contate o desenvolvedor.')
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        refreshDragons();
    }, [])

    return (
        isLoading ?
            <LoadingScreen />
            :
            <div className="dashboard_container  bg-glass">
                <div className="dashboard_fixed">
                    <h1>
                        Conheça os dragões mais incríveis
                    </h1>
                    <p>
                        Cuidado ao admirá-los, você pode acabar pegando fogo!
                    </p>
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