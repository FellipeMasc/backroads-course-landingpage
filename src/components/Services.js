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
            </div>
        </section>
    );
};
