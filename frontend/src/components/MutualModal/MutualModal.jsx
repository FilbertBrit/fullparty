
import { useDispatch } from "react-redux"
import { closeModal } from "../../store/modal";

export const MutualModal = () => {

    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(closeModal());
    }

    return (
        <div></div>
    )
}