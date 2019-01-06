import React from "react";

interface Props {
    array_content : string;
    img_src : string;
    header : string;
}

export default class Card extends React.Component<Props> {
    render() {
        const {array_content, img_src, header} = this.props;
        return(
            <div className="card">
                {
                    img_src &&
                    <div className="card-header">
                        <div className="card-image">
                            <img src={img_src} className="image" />
                        </div>
                    </div>
                }
                {
                    header && 
                    <div className="card-header">
                        <p>{header}</p>
                    </div>
                }
                <div className="card-content has-centered-text">
                    <h3>{array_content[0]}</h3>
                    <p>
                        {array_content[1]}
                    </p>
                </div>
            </div>    
        )
    }
}
