import cancel from "../../images/cancel.png"
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal";
import { useEffect } from "react";
import { fetchUser } from "../../store/user";
import "./MutualModal.css"


export const MutualModal = ({ mutualId }) => {

    // console.log('hi')
    // debugger
    const dispatch = useDispatch();
    // const mutual = useSelector(state => state.users)
    // mutual ? console.log(mutual.name.slice(0,1)) : console.log('hi')

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(closeModal());
    }

    useEffect(() => {
        // dispatch(fetchUser(mutualId))
    }, [dispatch])

    return (
        // mutual ? 
        <div className="mutual-modal-component">
            <div className="exit-btn-mutual-component" onClick={handleCancel}><img src={cancel} id="cancel-img" /></div>

            <div className="mutual-modal-profile">
                {/* <div className="user-profile-photo" id="user-profile-mutuals">
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

                </div> */}
            </div>
        </div>
        // : null
    )
}