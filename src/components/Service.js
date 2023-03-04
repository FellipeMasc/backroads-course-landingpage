export const Service = (props) => {
    const { serviceIcon, title } = props;
    return (
        <article className="service">
            <span className="service-icon">
                <i className={serviceIcon}></i>
            </span>
            <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.</p>
            </div>
        </article>
    );
};
