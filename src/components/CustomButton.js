import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomButton({ className, onClick, icon, data }) {

    return (
        <button className={className} onClick={onClick} >
            {icon && <FontAwesomeIcon className="button-icon" icon={icon} />}{data}
        </button>
    )
}