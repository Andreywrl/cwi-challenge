import { useAuth } from "../../contexts/AuthProvider";
import dragonLogo from "../../assets/Dragons.png";
import Button from "../Button";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function Header() {

    const { user, signOut } = useAuth();

    return (user &&
        <div className="layout_header_centralizer" >
            <div className="layout_header_content" >
                <Link to={'/'}>
                    <img className="layout_header_img" src={dragonLogo} alt="Logo redonda na tela de login, contendo o texto 'Dragons'." />
                </Link>

                <Button
                    icon={faRightFromBracket}
                    text="Sair"
                    onClick={() => signOut()}
                />
            </div>
        </div>
    );
};
