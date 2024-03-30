import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal"
import { SocialForm } from "../SocialForm/SocialForm"
import { MutualModal } from "../MutualModal/MutualModal"
import { InviteForm } from "../InviteModal/InviteForm"
import './Modal.css'

export const Modal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal)
    const componentCall = modal ? modal['command'] : '';
    const prop = modal ? modal['prop'] : '';
    let component;
    let div = ''
    modal ? document.body.style.overflow = "hidden" :  document.body.style.overflow = "auto"; 
    
    //this component is in the app, if modal is not called this component will return null -> nothing
    if(!modal){
        return null;
    }

    //switch for handling which modal is being called to call corresponding modal component
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

    const handleExit = (e) => {
        dispatch(closeModal());
    }

    return (
            <div className="modal-background" onClick={handleExit}>

                <div className={ div } onClick={e => e.stopPropagation()}>
                    { component }
                </div>
                
            </div>
    )
}