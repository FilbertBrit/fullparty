import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { closeModal } from "../../store/modal";
import cancel from "../../images/cancel.png"
import "./InviteForm.css"

export const InviteForm = ({ eventId }) => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const event = useSelector(state => state.events[eventId]);
    let filteredMutuals = []

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(closeModal());
    }

    return (
        <div className="invite-modal-component">
            <div className="invite-select">
                <div className="exit-btn-mutual-component" onClick={handleCancel}>
                    <img src={cancel} id="cancel-img" alt="cancel"/>
                </div>
                <header>
                    <h2>Invite</h2>
                    <button>COPY LINK</button>
                </header>
                <div className="invitees-menu">
                    <input 
                        type="text"
                        placeholder="🔍 Find a Mutual"
                    />
                    <button>fiter by event</button>
                    <div className="invitees-mutuals">
                        {
                            filteredMutuals.map( (event, i) =>
                                {}
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="invite-msg-inv-container">
                <div className="invite-message">
                    <header>Message</header>
                    <p>🥳 Hey [<span>Name</span>], {sessionUser.name} wants you to come to {event.title}!</p>
                    <input
                        type="text"
                        placeholder="(Optional) Add a custom note"
                    />
                    <p>RSVP 👉 [<span>link</span>]</p>
                </div>
                <div className="invite-invitees">
                    <header>
                        <h2>Invitees (0)</h2>
                    </header>
                    <button>CANCEL</button>
                    <button>SEND TEXTS</button>
                </div>
            </div>
        </div>
    )
}