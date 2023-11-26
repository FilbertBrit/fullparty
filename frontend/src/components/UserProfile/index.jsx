import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import { useHistory, useParams } from "react-router";
import { NavLink, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import wazzap from "../../images/wazzap-halloween.jpeg"
import "./UserProfile.css"
import { AiOutlineInstagram } from "react-icons/ai"
import { useState } from "react";

export function UserProfile () {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const joinedDate = sessionUser.joined;
    const profile = useParams();
    const [socials, setSocials] = useState(false);

    if (sessionUser.id != profile.userId) return <Redirect to="/events" />;

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
                        <button id='edit-profile-btn' onClick={ () => history.push('/users/' + userId + '/edit')}>EDIT PROFILE</button>
                    </div>
                </div>
                <div className="profile-details-div">
                    <div className="profile-user-name">
                        {sessionUser.name}
                    </div>
                    {sessionUser.bio  && 
                    <div className="profile-user-bio">  
                        <h3 id="user-profile-details">{sessionUser.bio ? (sessionUser.bio) : ("")}</h3>
                    </div>
                    }
                    {socials && 
                    <div className="profile-user-socials">
                        {/* <h3>Socials</h3> */}
                    </div>
                    }
                    <div className="profile-user-join-date">
                        <h3 id="user-profile-details">💥 <span id="bam-emoji"> Joined {joinedDate}</span></h3>
                    </div>
                    {/* <div className="profile-user-achievments"> */}
                        {/* <h3>Achievments</h3> */}
                    {/* </div> */}
                </div>
            <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
            </div>
        </>
    )
}