import cancel from "../../images/cancel.png"
import { useDispatch } from "react-redux"
import { closeModal } from "../../store/modal";

export const MutualModal = ({ mutual }) => {

    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(closeModal());
    }

    return (
        <div className="mutual-modal">
            <div className="exit-btn" onClick={handleCancel}><img src={cancel} id="cancel-img" /></div>
            <div className="mutual-modal-profile">
                <div className="user-profile-photo" id="user-profile-mutuals">
                      <div className="initials" id="initials">
                        {mutual.name.slice(0,1)}
                      </div>
                </div>
                <div id="username-container-mutual-prev">
                    <h2>{mutual.name}</h2> 
                </div>
                <div className="profile-user-join-date">
                    <h3 id="user-profile-details">💥 <span id="bam-emoji"> Joined {mutual.joined}</span></h3>
                </div>
                <div className="mutual-modal-events">

                </div>
            </div>

        </div>
    )
}