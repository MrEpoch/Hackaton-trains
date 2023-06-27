import "./landing.css";
import trainSunset from "../assets/train-sunset.jpg";

export default function Landing() {
  return (
    <section className="trains__landing">
        <div style={{ backgroundImage: `url(${trainSunset})` }} className="trains__landing__image">
            <div className="custom-shape-divider-bottom-1687887795">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    </section>
  );
}
