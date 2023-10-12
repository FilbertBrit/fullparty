import Navigation from "../Navigation";
import './SplashPage.css'
import phone from "../../images/phone.png"
import highkeylowkey from "../../images/highkeylowkey.png"
import goodtimes from "../../images/goodtimes.png"
import events from "../../images/events-demo.webp"
import effect from "../../images/effect.webp"
import theme from "../../images/theme.webp"
import app from "../../images/app.webp"
import contacts from "../../images/contacts.webp"
import rsvp from "../../images/rsvp.webp"
import comments from "../../images/comments.webp"
import photos from "../../images/photo-roll.webp"
import cost from "../../images/cost.webp"
import polls from "../../images/polls.webp"
import blasts from "../../images/text-blast.webp"
import enjoy from "../../images/enjoy.webp"
import camera from "../../images/camera.webp"
import feature from "../../images/feature.webp"

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
                        {/* <button id="div-1-btn">CREATE YOUR PARTY PAGE</button> */}
                        <a href="/create" id="div-1-btn"> CREATE YOUR PARTY PAGE </a>
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
                        <a href="/create" id="div-3-start-planning-btn"> START PLANNING </a>
                    </div>
                </div>
                <div className="div-4">
                    <div className="party-pages-container">
                        <h3 id="party-pages">PARTY PAGES FOR EVERY VIBE</h3>
                    </div>
                    <div className="div-4-photos-container">
                        <div className="div-4-events">
                            <img src={events} id="event-photo" />
                        </div>
                        <div className="div-4-inner-div">
                            <img src={app} id="app-img" />
                            <div className="design">
                                <img src={theme} id="theme" />
                                <img src={effect} id="effect" />
                            </div>
                        </div>
                    </div>
                    <div className="get-started-btn">
                        <a href="/create" id="started-btn">GET STARTED</a>
                    </div>
                </div>
                <div className="div-5">
                    <div className="pick-your-container">
                        <h3 id="pick-your-header">PICK YOUR CROWD</h3>  
                    </div>
                    <div className="div-5-photo-container">
                        <div className="container">
                            <img src={contacts} id="contact-img" />
                            <h4 id="photo-text">Share link or Text Blast past guest</h4>
                        </div>
                        <div className="rsvp-container">
                            <img src={rsvp} id="rsvp-img" />
                            <h4 id="photo-text">Get RSVPs or gauge interest</h4>
                        </div>
                        <div className="container">
                            <img src={comments} id="comments-img" />
                            <h4 id="photo-text">Group adds comments + gifs</h4>
                        </div>
                    </div>
                    <div className="try-btn">
                        <a href="/create" id="try-btn">TRY IT OUT</a>
                    </div>
                </div>

                    <div className="div6-header">
                        <h4>FOCUS ON</h4>
                        <h4 id="planning-h4">PLANNING</h4>
                        <h4 id="partying-h4">PARTYING</h4>
                    </div>
                <div className="div-6">
                    <div className="div-6-photo-container">
                        <div className="photos-shared">
                            <h4 id="inner-h4">Share photos</h4>
                            <img src={photos} id="share-photos" />
                        </div>
                        <div className="div-6-photo-container-inner">
                            <h4 id="inner-h4">Collect $$$</h4>
                            <img src={cost} id="cost-img" />
                            <img src={polls} id="poll-img" />
                            <h4 id="inner-h4">Run polls</h4>
                        </div>
                        <div className="text-blasts">
                            <img src={blasts} id="text-blast" />
                            <h4 id="inner-h4">Text Blast updates</h4>
                        </div>
                    </div>
                    <div className="gtps-btn">
                        <a href="/create" id="gtps-btn">GET THE PARTY STARTED</a>
                    </div>
                </div>
                <div className="div-7">
                    {/* <div className="div-5-photo-container"> */}
                        <img src={enjoy} id="img-5" />
                        <img src={camera} id="img-5" />
                    {/* </div> */}
                    <h4 id="header-div-7">The Recyclable Camera</h4>
                    <h4 id="h4-div-7">Includes development, a prepaid mailer & free shipping.</h4>
                    <h4 id="h4-div-7">Photos are sent straight to your phone, where you can upload them to your partiful party page.</h4>
                    <h4 id="h4-div-7">✨Go ahead, make some memories✨</h4>
                    <h4 id="h4-div-7">(The specs: Premium Kodak 400 ISO 35mm film with 27 exposures.)</h4>
                    <div className="jtw-btn">
                        <a href="/" id="jtw-btn">JOIN THE WAITLIST</a>
                    </div>
                    <h4 id="h4-div-7">Why aren't you partying yet??</h4>
                    <div className="cpp-btn">
                        <a href="/create" id="cpp-btn">CREATE PARTY PAGE</a>
                    </div>
                </div>
                <div className="div-8">
                    <h2 id="feature-h4">OUR OTHER FEATURES</h2>
                    <img src={feature} id="features-img" />
                    <a href="/create" id="cpp-btn">PRESS TO PARTY</a>
                </div>
                {/* <div className="div-9">
                    <h4>Ready to start partying?</h4>
                    <h4>Create your page </h4>
                </div> */}
            </div>
        </div>

    )
}