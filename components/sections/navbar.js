import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <AnchorLink className="navbar-item" href="#ref-presentation"> 
                        <img className="image" 
                            src="http://www.lecoledemusiquesactuelles.fr/wp-content/uploads/2018/06/Logo-jpeg.jpg" alt="Zéro-Gâchis" />
                    </AnchorLink >
                </div>

                <div id="navbarBasic" className="navbar-menu">
                    <div className="navbar-end">
                        <AnchorLink className="navbar-item" href="#ref-home">Acceuil</AnchorLink >
                        <AnchorLink className="navbar-item" href="#ref-presentation">Présentation</AnchorLink >
                        <AnchorLink className="navbar-item" href="#ref-price">Formules</AnchorLink >
                        <AnchorLink className="navbar-item" href="#ref-contact">Nous contacter</AnchorLink >
                        <a className="navbar-item" target="_blank" href="http://espace.bean3330.odns.fr/">Espaces Elèves</a >
                    </div>
                </div>
            </nav>
        ) 
    }
}
