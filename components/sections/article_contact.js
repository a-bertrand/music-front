import FormContact  from './contact_form';
import GoogleMap    from './googlemap'
export default () => (
    <section className="hero is-fullheight has-text-centered">
        <div className="hero-body">
            <div className="container is-fuild">
                <h1 className="title has-text-centered">
                    Nous contacter
                </h1>
                <div className="columns is-desktop">
                    <div className="column">
                        <img src="https://static.wixstatic.com/media/9abaa4_0a6969ee8e1c4c28861b7a5779f58908.jpg/v1/fill/w_525,h_543,al_c,q_80,usm_0.66_1.00_0.01/9abaa4_0a6969ee8e1c4c28861b7a5779f58908.webp"  
                        className="image"/>
                    </div>
                    <div className="column">
                        <FormContact />
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </div>
    </section>
)