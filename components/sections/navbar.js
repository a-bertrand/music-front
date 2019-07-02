import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class NavBar extends React.Component{
    constructor(props ) {
        super(props)
        this.state = {
            OnclickekBurger  : false
        };
    }
    on_click_burger(){
        this.setState({
            OnclickekBurger : !this.state.OnclickekBurger
        })
    }
    exit_menu(){
        this.setState({
            OnclickekBurger : false
        }) 
    }
    render(){
        let burger_nav_class = "navbar-menu"
        if(this.state.OnclickekBurger == true){
            burger_nav_class += " display_it"
        }
        return(
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <AnchorLink className="navbar-item" href="#ref-presentation"> 
                        <img className="image" 
                            src="http://bean3330.odns.fr/front-media/logo.jpg" alt="L'école de musique d'ancenis" />
                    </AnchorLink >
                    <a role="button" 
                    class="navbar-burger burger" 
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample" 
                    onClick={this.on_click_burger.bind(this)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasic" className={burger_nav_class}>
                    <div className="navbar-end">
                        <AnchorLink onClick={this.on_click_burger.bind(this)} className="navbar-item" href="#ref-home">Accueil</AnchorLink >
                        <AnchorLink onClick={this.on_click_burger.bind(this)} className="navbar-item" href="#ref-presentation">Présentation</AnchorLink >
                        <AnchorLink onClick={this.on_click_burger.bind(this)} className="navbar-item" href="#ref-price">Formules</AnchorLink >
                        <AnchorLink onClick={this.on_click_burger.bind(this)} className="navbar-item" href="#ref-contact">Nous contacter</AnchorLink >
                        <a className="navbar-item" target="_blank" href="http://espace.lecoledemusiquesactuelles.fr">Espaces élève</a >
                    </div>
                </div>
            </nav>
        ) 
    }
}
