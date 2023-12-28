import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal"
import './Modal.css'
import { SocialForm } from "../SocialForm/SocialForm"
import { useState } from "react"


export const Modal = () => {
    const modal = useSelector(state => state.modal)
    const componentCall = modal ? modal.split(" ")[0] : ''
    const prop = modal ? modal.split(" ")[1] : '' 
    const dispatch = useDispatch();
    // console.log(componentCall, prop);
    
    if(!modal){
        return null;
    }

    let component;

    // console.log('check')
    switch (componentCall) {
        case 'social-form':
            component = <SocialForm social={ prop }/>;
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
            className="modal-child"
            onClick={e => e.stopPropagation()}>
            { component }
            </div>
      </div>
    )
}