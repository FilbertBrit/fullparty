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
import stringy from "../../images/stringyy.png"
import review1 from "../../images/review1.png"
import review2 from "../../images/review2.png"
import review3 from "../../images/review3.png"
import review4 from "../../images/review4.png"
import demo from "../../images/demo.mov"
import { AiOutlineInstagram } from "react-icons/ai"

export function SplashPage () {
    return (
        <div className="splash">
            <Navigation/>
            <div className="splash-layout">
                <div className="div-1">
                    <div className="phone-gif">
                        <video src={demo} width="170" id="vid" muted loop autoPlay ></video>
                        <img src={phone} id="phone" alt="img"/>
                    </div>
                    <div className="div-1-header">
                        <img src={highkeylowkey} id="highkey" alt="img"/>
                        <div className="sexiest">
                        The sexiest way to get all your guests on the same page (literally)
                        </div>
                        <a href="/create" id="div-1-btn"> CREATE YOUR PARTY PAGE </a>
                        <div id="div-1-already-a-host">
                            Already a host or guest?
                            <a href="/login" id="div-1-signin-btn"> Sign In </a>
                        </div>
                    </div>
                </div>
                <div className="div-2">
                    <img src={goodtimes} id="goodtimes" alt="img"/>
                </div>
                <div className="div-3">
                    <div id="div-3-header"> PEOPLE ARE SAYING...</div>
                    <div className="reviews">
                        <img src={review1} id="review" alt="img"/>
                        <img src={review2} id="review" alt="img"/>
                        <img src={review3} id="review" alt="img"/>
                        <img src={review4} id="review" alt="img"/>
                    </div>
                    <div className="start-planning-btn">
                        <a href="/login" id="div-3-start-planning-btn"> START PLANNING </a>
                    </div>
                </div>
                <div className="div-4">
                    <div className="party-pages-container">
                        <h3 id="party-pages">PARTY PAGES FOR EVERY VIBE</h3>
                    </div>
                    <div className="div-4-photos-container">
                        <div className="div-4-events">
                            <img src={events} id="event-photo" alt="img"/>
                        </div>
                        <div className="div-4-inner-div">
                            <img src={app} id="app-img" alt="img"/>
                            <div className="design">
                                <img src={theme} id="theme" alt="img"/>
                                <img src={effect} id="effect" alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="get-started-btn">
                        <a href="/login" id="started-btn">GET STARTED</a>
                    </div>
                </div>
                <div className="div-5">
                    <div className="pick-your-container">
                        <h3 id="pick-your-header">PICK YOUR CROWD</h3>  
                    </div>
                    <div className="div-5-photo-container">
                        <div className="container">
                            <img src={contacts} id="contact-img" alt="img" />
                            <h4 id="photo-text">Share link or Text Blast past guest</h4>
                        </div>
                        <div className="rsvp-container">
                            <img src={rsvp} id="rsvp-img" alt="img"/>
                            <h4 id="photo-text">Get RSVPs or gauge interest</h4>
                        </div>
                        <div className="container">
                            <img src={comments} id="comments-img" alt="img"/>
                            <h4 id="photo-text">Group adds comments + gifs</h4>
                        </div>
                    </div>
                    <div className="try-btn">
                        <a href="/login" id="try-btn">TRY IT OUT</a>
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
                            <img src={photos} id="share-photos" alt="img"/>
                        </div>
                        <div className="div-6-photo-container-inner">
                            <h4 id="inner-h4">Collect $$$</h4>
                            <img src={cost} id="cost-img" alt="img"/>
                            <img src={polls} id="poll-img" alt="img"/>
                            <h4 id="inner-h4">Run polls</h4>
                        </div>
                        <div className="text-blasts">
                            <img src={blasts} id="text-blast" alt="img"/>
                            <h4 id="inner-h4">Text Blast updates</h4>
                        </div>
                    </div>
                    <img src={stringy} id="stringy" alt="img"/>
                    <div className="gtps-btn">
                        <a href="/login" id="gtps-btn">GET THE PARTY STARTED</a>
                    </div>
                </div>
                <div className="div-7">
                    {/* <div className="div-5-photo-container"> */}
                        <img src={enjoy} id="img-5" alt="img"/>
                        <img src={camera} id="img-5" alt="img"/>
                    {/* </div> */}
                    <h4 id="header-div-7">The Recyclable Camera</h4>
                    <h4 id="h4-div-7">Includes development, a prepaid mailer & free shipping.</h4>
                    <h4 id="h4-div-7">Photos are sent straight to your phone, where you can upload them to your partiful party page.</h4>
                    <h4 id="h4-div-7">✨Go ahead, make some memories✨</h4>
                    <h4 id="h4-div-7">(The specs: Premium Kodak 400 ISO 35mm film with 27 exposures.)</h4>
                    {/* <div className="jtw-btn">
                        <a href="/" id="jtw-btn">JOIN THE WAITLIST</a>
                    </div> */}
                    <h4 id="h4-div-7">Why aren't you partying yet??</h4>
                    <div className="cpp-btn">
                        <a href="/login" id="cpp-btn">CREATE PARTY PAGE</a>
                    </div>
                </div>
                <div className="div-8">
                    <h2 id="feature-h4">OUR OTHER FEATURES</h2>
                    <img src={feature} id="features-img" alt="img"/>
                    <a href="/login" id="cpp-btn">PRESS TO PARTY</a>
                </div>

                <div id='footer'>© 2023 FullParty™ | Terms & Privacy | Careers | Questions? DM us <AiOutlineInstagram/></div>
            </div>
        </div>

    )
}