import FormContact  from './contact_form';
import GoogleMap    from './googlemap'
export default () => (
    <section className="hero has-text-centered">
        <div className="hero-footer">
            <div className="column">
                <h1 className="title has-text-centered">
                    Nous contacter
                </h1>
                <p>
                    <b>Adresse :</b> 13 Rue des Grands Champs, 44150 Ancenis
                </p>
                <p>
                    <b>Téléphone : </b>06 18 07 88 38
                </p>
                <p>
                    <b>Mail : lecoledemusiquesactuelles@gmail.com</b>
                </p>
            </div>
            <hr/>
            <GoogleMap />
        </div>
    </section>
)
/*  FORM CONTACT
export default () => (
    <section className="hero is-fullheight has-text-centered">
        <div className="hero-body">
            <div className="container is-fuild">
                <div className="columns is-desktop">
                    <div className="column">
                        <img src="https://static.wixstatic.com/media/9abaa4_0a6969ee8e1c4c28861b7a5779f58908.jpg/v1/fill/w_525,h_543,al_c,q_80,usm_0.66_1.00_0.01/9abaa4_0a6969ee8e1c4c28861b7a5779f58908.webp"  
                        className="image"/>
                    </div>
                    <div className="column">
                        <h1 className="title has-text-centered">
                            Nous contacter
                        </h1>
                        <FormContact />
                    </div>
                </div>
            </div>
        </div>
        <div className="hero-footer">
            <GoogleMap />
        </div>
    </section>
)*/