import Navigation from "../Navigation";
import './SplashPage.css'
import phone from "../../images/phone.png"
import highkeylowkey from "../../images/highkeylowkey.png"
import goodtimes from "../../images/goodtimes.png"
// import logo from "../../images/logo.png"

export function SplashPage () {
    return (
        <div>
            <Navigation/>
            {/* <h3>Welcome to splash page</h3> */}
            <div className="splash-layout">
                <div className="div-1">
                    <div className="phone-gif">
                        <img src={phone} id="phone" />
                    </div>
                    <div className="div-1-header">
                        <img src={highkeylowkey} id="highkey" />
                        <div className="sexiest">
                        The sexiest way to get all your guests on the same page (literally)
                        </div>
                        <button id="div-1-btn">CREATE YOUR PARTY</button>
                        <div id="div-1-already-a-host">
                            Already a host or guest?
                            <a href="/login" id="div-1-signin-btn"> Sign In </a>
                        </div>
                    </div>
                </div>
                <div className="div-2">
                    <img src={goodtimes} id="goodtimes" />
                </div>
                <div className="div-3">
                    <div id="div-3-header"> PEOPLE ARE SAYING...</div>
                    <div className="reviews">
                        <h4>review 1</h4>
                        <h4>review 2</h4>
                        <h4>review 3</h4>
                        <h4>review 4</h4>
                    </div>
                    <div className="start-planning-btn">
                        <a href="/login" id="div-3-start-planning-btn"> START PLANNING </a>
                    </div>
                </div>
                <div className="div-4">
                    <h3>PARTY PAGES FOR EVERY VIBE</h3>
                    <div className="dive-4-photos-container">

                    </div>
                    <button>GET START</button>
                </div>
                <div className="div-5">
                    <h3>PICK YOUR CROWD</h3>
                    <div className="div-5-photo-container">
                        <h4>element 1</h4>
                        <h4>element 2</h4>
                        <h4>element 3</h4>
                    </div>
                    <button>TRY IT OUT</button>
                </div>

                <div className="div-6">
                    <h3>FOCUS ON PLANNING PARTY</h3>
                    <div className="div-6-photo-container">
                        <h4>element</h4>
                        <div className="div-6-photo-container-inner">
                            <h4>element</h4>
                            <h4>element</h4>
                        </div>
                        <h4>element</h4>
                    </div>
                        <h4>element</h4>
                        <button>GET THE PARTY STARTED</button>
                </div>
                <div className="div-7">
                    <div className="div-5-photo-container">
                        <h4>element</h4>
                        <h4>element</h4>
                    </div>
                    <h4>The Recyclable Camera</h4>
                    <h4>Includes development, a prepaid mailer & free shipping.</h4>
                    <h4>Photos are sent straight to your phone, where you can upload them to your partiful party page.</h4>
                    <h4>✨Go ahead, make some memories✨</h4>
                    <h4>(The specs: Premium Kodak 400 ISO 35mm film with 27 exposures.)</h4>
                    <button>JOIN THE WAITLIST</button>
                    <h4>Why aren't you partying yet??</h4>
                    <button>CREATE PARTY PAGE</button>
                </div>
                <div className="div-8">
                    <h4>OUR OTHER FEATURES</h4>
                    <h4>photo element</h4>
                    <button>PRESS TO PARTY</button>
                </div>
                <div className="div-9">
                    <h4>Ready to start partying?</h4>
                    <h4>Create your page </h4>
                </div>
            </div>
        </div>

    )
}