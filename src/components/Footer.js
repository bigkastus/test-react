import youtubeIcon from "../icons/free-icon-youtube-4494485.png"
import fbIcon from "../icons/free-icon-facebook-4494475.png"
import watsAppIcon from "../icons/free-icon-whatsapp-4494494.png"
import tgIcon from "../icons/free-icon-telegram-3670070.png"
import instaIcon from "../icons/free-icon-instagram-2111463.png"

function Footer() {
    return(<>
        <footer className="Footer">        
            <h2>Footer</h2>
                <div className="icons">
                <a href="https://">
                    <img src={youtubeIcon} alt="fb-icon"/>
                </a>
                <a href="https://">
                    <img src={fbIcon} alt="fb-icon"/>
                </a>
                <a href="https://">
                    <img src={watsAppIcon} alt="fb-icon"/>
                </a>
                <a href="https://">
                    <img src={tgIcon} alt="fb-icon"/>
                </a>
                <a href="https://">
                    <img src={instaIcon} alt="fb-icon"/>
                </a>
            </div>
        </footer>
    </>)
}

export default Footer;