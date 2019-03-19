export default () => (
    <section className="hero video is-fullheight has-text-centered "> 
        <div className="hero-video"> 
            <video id="bgvid" playsInline autoPlay muted loop >
                <source src="static/videos/presentation.mov" />
            </video>
        </div>
        <div className="hero-body">
            <h1 className="title">Ecole de musique d'Ancenis</h1>
        </div>
    </section>
)