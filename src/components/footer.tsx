import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

export default function Footer() {
    return (
        <footer className="trains-footer">
            <div className="trains-footer__container__contact">
                <h5 className="trains-footer__contact__title">Contact</h5>
                <p className="trains-footer__contact__text">Hackhaton SI v techtoweru</p>
            </div>
            <div className="trains-footer__container__social">
                <h5 className="trains-footer__social__title">Social</h5>
                <div className="trains-footer__social__icons">
                    <FacebookIcon className="trains-footer__social__icon" />
                    <InstagramIcon className="trains-footer__social__icon" />
                    <GitHubIcon className="trains-footer__social__icon" />
                    <PublicIcon className="trains-footer__social__icon" />
                </div>
            </div>
            <div className="trains-footer__container__info">

            </div>
        </footer>
    )
}
