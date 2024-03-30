import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect  } from "react";
import { createNotification } from "../../store/notifications";
import { createInvite } from "../../store/invites";
import { closeModal } from "../../store/modal";
import { MutualInvitee } from "./MutualInvitee";
import { InvitePrev } from "./InvitePrev";
import controls from "../../images/controls.png"
import cancel from "../../images/cancel.png"
import "./InviteForm.css"

export const InviteForm = ({ eventId }) => {

    const dispatch = useDispatch();

    //grabbing essential data for component from redux store
    const sessionUser = useSelector(state => state.session.user);
    const event = useSelector(state => state.events[eventId]);
    const mutualsObj = useSelector(state => state.users)
    const mutuals = mutualsObj ? Object.values(mutualsObj) : [];

    //useful state variables
    const [filteredMutuals, setFilteredMutuals] = useState(mutuals)
    const [mutualFilter, setMutualFilter] = useState(); // input, ex: 'david'
    const [invites, setInvites] = useState({}); // {id: name}
    const [inviteMsg, setInviteMsg] = useState();
    
    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(closeModal());
    }
    
    // created invites + notifications for all selected invitees then closes invite modal
    const handleSubmit = async (e) => {
        e.preventDefault();

        for(let userId in invites){
            await dispatch(createInvite({senderId: sessionUser.id, receiverId: userId, eventId: eventId})).then( res => console.log(res));
            await dispatch(createNotification({notificationType: 'invite', content: inviteMsg || 'invite', receiverId: userId, senderId: sessionUser.id, eventId: eventId})).then( res => console.log(res));
        }
        dispatch(closeModal());

    }

    // useEffect will compute function when the dependent variable mutualFilter changes
    useEffect( () => {
        
        //checking whether how to update filteredMutuals
        const updateMutualArr = (mutualFilter !== undefined) && (mutualFilter !== '');

        if(updateMutualArr){ //will enter if user searching for a mutual

            //filtering for mutuals with names that include search string
            const filtered = mutuals.filter( mutual => mutual.name.toLowerCase().includes( mutualFilter.toLowerCase() ) )

            //sorting based on index of search string occurance in mutual name
            const sortBySubstring = (words, match) => {
                return words.sort((a, b) => {
                    return a.name.toLowerCase().indexOf(match) - b.name.toLowerCase().indexOf(match);
                });
            }
            
            const sortedFiltered = sortBySubstring(filtered, mutualFilter.toLowerCase());

            setFilteredMutuals(sortedFiltered)
        }else{ //will enter if user is not longer searching for a mutual
            setFilteredMutuals(mutuals)
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
                        <div className="empty-space"></div>
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