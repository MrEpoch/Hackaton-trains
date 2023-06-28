import "./landing.css";
import trainSunset from "../assets/train-sunset.jpg";

export default function Landing() {
  return (
    <section className="trains__landing">
        <div style={{ backgroundImage: `url(${trainSunset})` }} className="trains__landing__image">
            <div className="trains__landing__image__text">
                Masters of nature wonders
            </div>
            <div className="custom-shape-divider-bottom-1687941412">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
                </svg>
            </div>        
        </div>
    </section>
  );
}
