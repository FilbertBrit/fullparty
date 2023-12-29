
import { useDispatch } from "react-redux"
import { closeModal } from "../../store/modal";
import { useEffect } from "react";

export const MutualModal = () => {

    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(closeModal());
    }

    useEffect(() => {
        
    })

    return (
        <div></div>
    )
}