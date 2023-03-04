import "../index.css";
import { Service } from "./Service";
import { Title } from "./Title";

export const Services = () => {
    return (
        <section className="section services" id="services">
            <Title first="our" second="services"></Title>
            <div className="section-center services-center">
                <Service serviceIcon="fas fa-wallet fa-fw" title="saving money"></Service>
                <Service serviceIcon="fas fa-tree fa-fw" title="endless hiking"></Service>
                <Service serviceIcon="fas fa-socks fa-fw" title="amazing comfort"></Service>
                {/* <article className="service">
                    <span className="service-icon">
                        <i className="fas fa-wallet fa-fw"></i>
                    </span>
                    <div className="service-info">
                        <h4 className="service-title">saving money</h4>
                        <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
                    </div>
                </article>

                <article className="service">
                    <span className="service-icon">
                        <i className="fas fa-tree fa-fw"></i>
                    </span>
                    <div className="service-info">
                        <h4 className="service-title">endless hiking</h4>
                        <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
                    </div>
                </article>

                <article className="service">
                    <span className="service-icon">
                        <i className="fas fa-socks fa-fw"></i>
                    </span>
                    <div className="service-info">
                        <h4 className="service-title">amazing comfort</h4>
                        <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
                    </div>
                </article> */}
            </div>
        </section>
    );
};
