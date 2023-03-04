import "../index.css";
import { tours } from "../data";
import { Title } from "./Title";

export const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title first="featured" second="tours"></Title>
            <div className="section-center featured-center">
                {tours.map((cards) => {
                    return (
                        <article className="tour-card" key={cards.id}>
                            <div className="tour-img-container">
                                <img src={cards.image} className="tour-img" alt="" />
                                <p className="tour-date">{cards.date}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{cards.title}</h4>
                                </div>
                                <p>{cards.info}</p>
                                <div className="tour-footer">
                                    <p>
                                        <span>
                                            <i className="fas fa-map"></i>
                                        </span>
                                        {cards.location}
                                    </p>
                                    <p>{cards.duration} days</p>
                                    <p>from ${cards.cost}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
