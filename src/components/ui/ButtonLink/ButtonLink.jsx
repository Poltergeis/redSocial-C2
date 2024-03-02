import { useNavigate } from "react-router-dom";
import propTypes from "prop-types"
import './ButtonLink.css'

export const ButtonLink = ({ route, children }) => {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        navigate(route);
    }

    return(
        <button className='btn-link' onClick={() => handleNavigate(route)}>
            {children}
        </button>
    )
}

ButtonLink.propTypes = {
    route : propTypes.string,
    children : propTypes.node
}