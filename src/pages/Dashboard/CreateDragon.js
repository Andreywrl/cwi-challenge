import { useNavigate } from "react-router-dom";

export default function CreateDragon() {

    const navigate = useNavigate();

    return (
        <div className="dashboard_fixed">
            <h3>
                Gostaria de criar um novo dragão?
            </h3>
            <button onClick={() => { navigate('/NewDragon') }}>Criar meu dragão</button>
        </div>
    )
};