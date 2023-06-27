import "./info.css";
import tripImage1 from "../assets/train-nature.jpg";
import tripImage2 from "../assets/train-sunset.jpg";
import tripImage3 from "../assets/train-people.jpg";

const Trips_array = [
    {
        title: "Bernina Express",
        description: "From glaciers to palms.",
        image: tripImage1,
    },
    {
        title: "Bernina Express - Last Minute",
        description: "Benefit from attractive prices.",
        image: tripImage2,
    },
    {
        title: "Bernina Herb Express",
        description: "Journey Into the Valposchiavo world of herbs.",
        image: tripImage3,
    },
];

export default function Information() {
    

    return (
        <section className="trains-info">
            <div className="trains-info__container">
                <h1>Welcome to Rhaetian Railway Shop</h1>
                <div className="trains-info__container__text">
                    <h3>Experience wonders of nature with our railway.</h3>
                    <p>
                        We give you the opportunity to experience the most beautiful landscapes in Switzerland. Enjoy the ride through Grisons with our culinary delights
                        or enjoy historical rides through steam locomotives. Be inspired with natura and culture.
                    </p>
                </div>
                <div className="trains-info__offers">
                    <h3>Our offers</h3>
                    <div className="trains-info__offers__trip__container">
                        {Trips_array.map((trip) => (
                            <div className="trains-info__offers__trip">
                                <img src={trip.image} alt={trip.title} />
                                <h6>{trip.title}</h6>
                                <p>{trip.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
