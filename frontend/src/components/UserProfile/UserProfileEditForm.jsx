import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation";
import { useHistory, useParams } from "react-router";
import wazzap from "../../images/wazzap-halloween.jpeg"
import "./UserProfile.css"
import"./UserProfileEditForm.css"
import { useState } from "react";
import plus from "../../images/plus-svgrepo-com.png"
import insta from "../../images/instagram.png"
import snap from "../../images/snapchat.png"
import twitter from "../../images/twitter.png"
import plusPink from "../../images/plus-pink.png"
import instaPink from "../../images/instagram-pink.png"
import snapPink from "../../images/snapchat-pink.png"
import twitterPink from "../../images/twitter-pink.png"
import { updateUser } from "../../store/user";

export function UserProfileEditForm () {
    debugger

    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id;
    const joinedDate = sessionUser.joined;
    const profile = useParams();
    const [name, setName] = useState(sessionUser.name);
    const [bio, setBio] = useState(sessionUser.bio);

    const handleSocial = (e) => {

    }
    const handleSubmit = (e) => {
        // debugger
        console.log('test')
        dispatch(updateUser({name: name, bio: bio, id: sessionUser.id})).then( res => history.push('/users/' + res.user.id))
    }

    return (
        <>
            <Navigation/>
            <div className="profile-layout">
                <div className="profile-edit-options-div">
                    <div className="profile-user-photo">
                        <div className="initials-profile">
                        {sessionUser.name.slice(0,1)}
                      </div>
                    </div>
                    <div className="profile-user-edit">
                        <button className='cancel-btn-edit-form' onClick={() => history.goBack()}>CANCEL</button>
                        <button id='edit-profile-save-btn' onClick={handleSubmit}>SAVE ✓</button>
                    </div>
                </div>
                <div className="profile-details-div-edit">
                    <div className="profile-user-name-edit">
                        {/* <textarea
                        id="username-edit-form"
                        value={name}
                        onChange={e => setName(e.target.value)}>
                        </textarea> */}
                        <input type="text"
                        id="username-edit-form"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="profile-user-bio-edit">  
                        {/* <h3 id="user-profile-details">{sessionUser.bio ? (sessionUser.bio) : ("")}</h3> */}
                        <input type="text"
                        id="profile-bio-edit-input"
                        placeholder="add bio"
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                        />
                    </div>
                    <div className="profile-user-socials">
                        <button className="social-btn" onClick={handleSocial}> 
                            <img src={plusPink} id="social-logo"/><img src={instaPink} id="social-logo-insta"/> <span id="social-btn-words"> Instagram </span> 
                        </button>
                        <button className="social-btn" onClick={handleSocial}> 
                            <img src={plusPink} id="social-logo"/><img src={twitterPink} id="social-logo"/> <span id="social-btn-words"> Twitter </span> 
                        </button>
                        <button className="social-btn" onClick={handleSocial}> 
                            <img src={plusPink} id="social-logo"/><img src={snapPink} id="social-logo"/> <span id="social-btn-words"> Snapchat </span> 
                        </button>
                    </div>
                    <div className="profile-user-join-date">
                        <h3 id="user-profile-details">💥 <span id="bam-emoji"> Joined {joinedDate}</span></h3>
                    </div>
                    {/* <div className="profile-user-achievments">
                        <h3>Achievments</h3>
                    </div> */}
                </div>
            </div>
        </>
    )
}