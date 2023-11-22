import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import { useHistory, useParams } from "react-router";
import wazzap from "../../images/wazzap-halloween.jpeg"
import "./UserProfile.css"
import"./UserProfileEditForm.css"
import { useState } from "react";

export function UserProfileEditForm () {

    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id;
    const joinedDate = sessionUser.joined;
    const profile = useParams();
    const [name, setName] = useState(sessionUser.name);
    const [bio, setBio] = useState('');

    return (
        <>
            <Navigation/>
            <div className="profile-layout">
                <div className="profile-edit-options-div">
                    <div className="profile-user-photo">
                        {/* <img src={wazzap} alt="show-img" id='profile-img'/> */}
                        <div className="initials-profile">
                        {sessionUser.name.slice(0,1)}
                      </div>
                    </div>
                    <div className="profile-user-edit">
                        <button className='cancel-btn-edit-form' onClick={() => history.goBack()}>CANCEL</button>
                        <button id='edit-profile-save-btn'>SAVE ✓</button>
                    </div>
                </div>
                <div className="profile-details-div">
                    <div className="profile-user-name">
                        <textarea
                        id="username-edit-form"
                        value={name}
                        onChange={e => setName(e.target.value)}>
                        </textarea>
                        {/* <input type="text" 
                        // placeholder={sessionUser.name}
                        id="username-edit-form"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        /> */}
                        {/* {sessionUser.name} */}
                    </div>
                    <div className="profile-user-bio">  
                        <h3 id="user-profile-details">{sessionUser.bio ? (sessionUser.bio) : ("")}</h3>
                        <input type="text"
                        placeholder="bio"
                        onChange={e => setBio(e.target.value)}
                        />
                    </div>
                    <div className="profile-user-socials">
                        {/* <h3>Socials</h3> */}
                        <button className="social-btn">add insta</button>
                        <button className="social-btn">add twitter</button>
                        <button className="social-btn">add snapchat</button>
                    </div>
                    <div className="profile-user-join-date">
                        <h3 id="user-profile-details">💥 <span id="bam-emoji"> Joined {joinedDate}</span></h3>
                    </div>
                    <div className="profile-user-achievments">
                        {/* <h3>Achievments</h3> */}
                    </div>
                </div>
            </div>
        </>
    )
}