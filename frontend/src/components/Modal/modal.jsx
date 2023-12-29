import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal"
import './Modal.css'
import { SocialForm } from "../SocialForm/SocialForm"
import { useState } from "react"
import { MutualModal } from "../MutualModal/MutualModal"


export const Modal = () => {
    const modal = useSelector(state => state.modal)
    const componentCall = modal ? modal[0] : '';
    const prop = modal ? modal[1] : '';
    const dispatch = useDispatch();
    // console.log(componentCall, prop);
    
    if(!modal){
        return null;
    }

    let component;

    switch (componentCall) {
        case 'social-form':
            component = <SocialForm social={ prop }/>;
            break;
        case 'mutual-modal':
            component = <MutualModal />
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
            className="modal-child"
            onClick={e => e.stopPropagation()}>
            { component }
            </div>
      </div>
    )
}