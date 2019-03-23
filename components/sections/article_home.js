export default () => (
    <section className="has-text-centered homepage-tile-video"> 
        <div className="main-video">
            <div className="video-js">
                <div className="bg-video">
                    <div className="video-js">
                        <video  playsInline autoPlay muted loop >
                            <source src="http://bean3330.odns.fr/static/videos/presentation.mov" />
                        </video>
                    </div>
                    <div className="video-layout">
                        <div className="home-text">
                            <h1 className="title">Ecole de musique d'Ancenis</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </section>
)