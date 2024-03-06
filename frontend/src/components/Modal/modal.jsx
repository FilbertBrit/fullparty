import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal"
import './Modal.css'
import { SocialForm } from "../SocialForm/SocialForm"
import { MutualModal } from "../MutualModal/MutualModal"
import { InviteForm } from "../InviteModal/InviteForm"

export const Modal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal)
    const componentCall = modal ? modal['command'] : '';
    const prop = modal ? modal['prop'] : '';
    let component;
    let div = ''
    modal ? document.body.style.overflow = "hidden" :  document.body.style.overflow = "auto"; 
    
    if(!modal){
        return null;
    }
    // debugger

    switch (componentCall) {
        case 'social-form':
            component = <SocialForm social={ prop }/>;
            div = 'modal-child';
            break;
        case 'mutual-modal':
            component = <MutualModal mutualId={ prop }/>;
            div = 'modal-mutual';
            break;
        case 'invite-modal':
            component = <InviteForm eventId={ prop }/>
            div = 'modal-invite';
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
                    className={div}
                    onClick={e => e.stopPropagation()}>
                    { component }
                    </div>
            </div>
    )
}