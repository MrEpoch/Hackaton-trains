import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import "./footer.css";

export default function Footer() {
    return (
        <footer className="trains-footer">
            <div className="trains-footer__container__contact">
                <h5 className="trains-footer__contact__title">Contact</h5>
                <p className="trains-footer__contact__text">Hackhathon SI v techtoweru</p>
            </div>
            <div className="trains-footer__container__social">
                <h5 className="trains-footer__social__title">Social</h5>
                <div className="trains-footer__social__icons">
                    <div><FacebookIcon className="trains-footer__social__icon" /></div>
                    <div><InstagramIcon className="trains-footer__social__icon" /></div>
                    <div><GitHubIcon className="trains-footer__social__icon" /></div>
                    <div><PublicIcon className="trains-footer__social__icon" /></div>
                </div>
            </div>
            <div className="trains-footer__container__info">

            </div>
        </footer>
    )
}
