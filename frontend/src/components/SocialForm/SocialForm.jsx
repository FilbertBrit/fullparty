import "./SocialForm.css"
import cancel from "../../images/cancel.png"
import { useDispatch } from "react-redux"
import { closeModal } from "../../store/modal";

export const SocialForm = ({social}) => {
    const dispatch = useDispatch();
    console.log(social)
    console.log('here')

    const handleSubmit = () => {

    }
    const handleCancel = () => {
        dispatch(closeModal());
    }

    return(
        <div className="social-compnt">
            <div className="exit-btn" onClick={handleCancel}><img src={cancel} id="cancel-img" /></div>
            <form id="social-form">
                <h5 id="social-header">{social}</h5>
                <div className="social-input-container">
                    <span className="at-sym">@</span>
                    <input type="text" placeholder="Your username" id="social-input" />
                </div>
                <button onClick={handleSubmit} className="social-confirm-btn"> CONFIRM </button>
            </form>
            {/* <h3>Socials</h3> */}
        </div>
    )
}