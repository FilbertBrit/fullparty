import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { closeModal } from "../../store/modal";
import cancel from "../../images/cancel.png"
import "./InviteForm.css"
import { useState, useEffect  } from "react";
import { MutualInvitee } from "./MutualInvitee";
import controls from "../../images/controls.png"

export const InviteForm = ({ eventId }) => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const event = useSelector(state => state.events[eventId]);
    const mutualsObj = useSelector(state => state.users)
    const mutuals = mutualsObj ? Object.values(mutualsObj) : [];
    let filteredMutuals = mutuals;
    const [mutualFilter, setMutualFilter] = useState();

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(closeModal());
    }

    useEffect( () => {

    }, [mutualFilter])

    return (
        <div className="invite-modal-component">
            <div className="invite-select">
            <div className="exit-btn-mutual-component" onClick={handleCancel}>
                <img src={cancel} id="cancel-img" alt="cancel"/>
            </div>
                <header id="invite-select-header">
                    <h2 id="invite-select-header-text">Invite</h2>
                    <button id="invite-select-header-btn">COPY LINK</button>
                </header>
                <div className="invitees-menu">
                    <div id="invtite-search-bar">
                        <p>🔍</p>
                        <input 
                            id="invtite-search-bar-input"
                            type="text"
                            placeholder="Find a Mutual"
                        />
                    </div>
                    <button className="controls-btn">
                        <img src={controls} alt="controls" id="control-btn"/>
                    </button>
                    <div className="invitees-mutuals">
                        {
                            filteredMutuals.map( (mutual, i) =>
                                <MutualInvitee mutual={mutual} key={i}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="invite-msg-inv-container">
                <div className="invite-message">
                    <div id="top-header-invite-message">
                    <header>Message</header>
                    <p>{}/480</p>
                    </div>
                    <p>🥳 Hey [<span>Name</span>], {sessionUser.name} wants you to come to {event.title}!</p>
                    <textarea
                        id="invite-msg-input"
                        type="text"
                        placeholder="(Optional) Add a custom note"
                    />
                    <p id="rsvp-link">RSVP 👉 [<span>link</span>]</p>
                </div>
                <div className="invite-invitees">
                    <header>
                        <h2>Invitees (0)</h2>
                    </header>
                    <button>CANCEL</button>
                    <button>SEND TEXTS</button>
                </div>
            </div>
            {/* <div className="exit-btn-mutual-component" onClick={handleCancel}>
                <img src={cancel} id="cancel-img" alt="cancel"/>
            </div> */}
        </div>
    )
}