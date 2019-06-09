export default () => (
    <section className="has-text-centered homepage-tile-video"> 
        <div className="main-video">
            <div className="video-js">
                <div className="bg-video">
                    <div className="video-js">
                        <video  playsInline autoPlay muted loop >
                            <source src="http://bean3330.odns.fr/front-media/presentaiton-video.mov" />
                        </video>
                    </div>
                    <div className="video-layout">
                        <div className="home-text">
                            <h1 className="title">Ecole de musiques actuelles d'Ancenis</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </section>
)