import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../store/modal";
import cancel from "../../images/cancel.png"
import "./InviteForm.css"
import { useState, useEffect  } from "react";
import { MutualInvitee } from "./MutualInvitee";
import controls from "../../images/controls.png"
import { InvitePrev } from "./InvitePrev";
import { createInvite } from "../../store/invites";
import { createNotification } from "../../store/notifications";

export const InviteForm = ({ eventId }) => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const event = useSelector(state => state.events[eventId]);
    const mutualsObj = useSelector(state => state.users)
    const mutuals = mutualsObj ? Object.values(mutualsObj) : [];
    const [filteredMutuals, setFilteredMutuals] = useState(mutuals)
    const [mutualFilter, setMutualFilter] = useState();
    const [invites, setInvites] = useState({});
    const [inviteMsg, setInviteMsg] = useState();

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(closeModal());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(invites, inviteMsg)
        for(let userId in invites){
            dispatch(createInvite({senderId: sessionUser.id, receiverId: userId, eventId: eventId})).then( res => console.log(res));
            dispatch(createNotification({notificationType: 'invite', content: inviteMsg, receiverId: userId, senderId: sessionUser.id, eventId: eventId})).then( res => console.log(res));
        }
        handleCancel(e)
    }

    useEffect( () => {
        
        const noUpdateMutualArr = mutualFilter === undefined || mutualFilter === ''  ;
        switch (!noUpdateMutualArr) {
            case true:
                const filtered = mutuals.filter( mutual => mutual.name.toLowerCase().includes(mutualFilter.toLowerCase()) )

                const sortBySubstring = (words, match) => {
                return words.sort((a, b) => {
                    return a.name.toLowerCase().indexOf(match) - b.name.toLowerCase().indexOf(match);
                });
                }

                const sortedFiltered = sortBySubstring(filtered, mutualFilter.toLowerCase());

                setFilteredMutuals(sortedFiltered)
                break;
        
            default:
                setFilteredMutuals(mutuals)
                break;
        }
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
                            onChange={ (e) => setMutualFilter(e.target.value) }
                        />
                    </div>
                    <button className="controls-btn">
                        <img src={controls} alt="controls" id="control-btn"/>
                    </button>
                    <div className="invitees-mutuals">
                        {
                            filteredMutuals.map( (mutual, i) =>
                                <MutualInvitee mutual={mutual} invites={invites} setInvites={setInvites} key={i}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="invite-msg-inv-container">
                <div className="invite-message">
                    <div id="top-header-invite-message">
                        <header>Message</header>
                        <p>{inviteMsg?.length || 0}/480</p>
                    </div>
                    <p>🥳 Hey [<span>Name</span>], {sessionUser.name} wants you to come to {event.title}!</p>
                    <textarea
                        id="invite-msg-input"
                        type="text"
                        placeholder="(Optional) Add a custom note"
                        onChange={ e => setInviteMsg(e.target.value)}
                        maxLength={480}
                    />
                    <p id="rsvp-link">RSVP 👉 [<span>link</span>]</p>
                </div>
                <div className="invite-invitees">
                    <div className="invitees-section">
                        <header className="invitees-header">
                            <h2>Invitees <span id="num-invites">({Object.keys(invites).length || 0})</span></h2>
                        </header>
                        <div className="invites-preview">
                            {
                                Object.entries(invites).map( (invite, i) =>
                                    <InvitePrev invite={invite} invites={invites} setInvites={setInvites} key={i}/>
                                )
                            }
                        </div>
                    </div>

                    <div className="invite-submit-btns">
                        <button id="cancel-invite" onClick={handleCancel}>CANCEL</button>
                        <button id="send-texts-btns" className={ Object.keys(invites).length === 0 ? 'disabled-send-texts' : ''} onClick={handleSubmit}>SEND TEXTS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}