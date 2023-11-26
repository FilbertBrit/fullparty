import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal"
import './Modal.css'
import { SocialForm } from "../SocialForm/SocialForm"


const Modal = () => {
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch();

    if(!modal){
        return null;
    }

    let component;

    switch (modal) {
        case 'social-form':
            component = <SocialForm/>;
            break;
        default:
            return null;
    }

    const handleClick = (e) => {
        dispatch(closeModal());
    }

    return (
        <div
        className="modal-background"
        onClick={handleClick}>
            <div
            className={setClassName()}
            onClick={e => e.stopPropagation()}>
            { component }
            </div>
      </div>
    )
}