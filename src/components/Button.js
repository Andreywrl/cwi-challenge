import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ className, onClick, icon, text, props }) {

    return (
        <button className={className} onClick={onClick} {...props} >
            {icon && <FontAwesomeIcon className="button-icon" icon={icon} color="white" />}{text}
        </button>
    )
}