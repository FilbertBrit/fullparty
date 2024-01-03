import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal"
import './Modal.css'
import { SocialForm } from "../SocialForm/SocialForm"
import { MutualModal } from "../MutualModal/MutualModal"
import { useState } from "react"


export const Modal = () => {
    // debugger
    const modal = useSelector(state => state.modal)
    const componentCall = modal ? modal[0] : '';
    const prop = modal ? modal[1] : '';
    let div = ''
    const dispatch = useDispatch();
    // console.log(componentCall, prop);
    
    if(!modal){
        return null;
    }

    let component;

    switch (componentCall) {
        case 'social-form':
            component = <SocialForm social={ prop }/>;
            div = 'modal-child';
            break;
        case 'mutual-modal':
            // console.log('hi')
            component = <MutualModal mutualId={ prop }/>;
            div = 'modal-mutual';
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