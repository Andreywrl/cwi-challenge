import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function CreateDragon() {

    const navigate = useNavigate();

    return (
        <div className="dashboard_fixed dragon_card">
            <h3>
                Gostaria de criar um novo dragão?
            </h3>
            <Button
                icon={faPlus}
                text="Criar meu dragão"
                onClick={() => { navigate('/NewDragon') }}
            />
        </div>
    )
};