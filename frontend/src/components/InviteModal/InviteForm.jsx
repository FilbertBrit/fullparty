import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal";
import "./InviteForm.css"

export const InviteForm = () => {

    const dispatch = useDispatch();
    console.log('hi')



    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(closeModal());
    }

    return (
        <div className="invite-modal-component">
            hi
        </div>
    )
}