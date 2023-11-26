import "./SocialForm.css"

export const SocialForm = ({social}) => {
    console.log(social)
    console.log('here')

    const handleSubmit = () => {

    }

    return(
        <div className="social-compnt">
            <form id="social-form">
                <h5 id="social-header">{social}</h5>
                <div>
                    <input type="text" placeholder="Your username" id="social-input" />
                </div>
                <button onClick={handleSubmit} className="social-confirm-btn"> CONFIRM </button>
            </form>
            {/* <h3>Socials</h3> */}
        </div>
    )
}