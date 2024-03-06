import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal";
import "./InviteForm.css"

export const MutualModal = () => {




    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(closeModal());
    }

    return (
        <>
        </>
    )
}