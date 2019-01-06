import React from 'react'

interface State {
    current_img_id : number;
    slider_max : number;
    upper_modificator : number;
    down_modificator : number;
    total_modificator : number;
    PREVIOUS : string;
    NEXT : string;
    
}
interface Props {
    img_array : Array<string>;
}

interface IMG_ARRAY {
    src : string;
    array_text : any;
}

export default class Rotation extends React.Component <Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {
            current_img_id : 0,
            slider_max : this.props.img_array.length,
            upper_modificator : 1,
            down_modificator : this.props.img_array.length - 1,
            total_modificator : this.props.img_array.length,
            PREVIOUS : "PREVIOUS",
            NEXT : "NEXT"
        }
    }
    componentDidMount() {
        setInterval(this.slideinslider.bind(this,this.state.NEXT), 5000); 
    }
    slideinslider(action : string) {
        const state = this.state;
        let  current_img_id     = state.current_img_id;
        if(action === state.NEXT) {
            current_img_id = current_img_id + 1;
        } else if (action === state.PREVIOUS) {
            current_img_id = current_img_id - 1;
        }
        if (current_img_id === this.state.slider_max ) {
            current_img_id = 0;
        } else if (current_img_id < 0) {
            current_img_id = this.state.slider_max - 1;
        } 
        let upper_modificator = Math.abs(1 - current_img_id);
        let down_modificator = state.total_modificator - upper_modificator;
        this.setState({
            current_img_id : current_img_id,
            down_modificator : down_modificator,
            upper_modificator : upper_modificator
        })
    }
    render() {
        const {img_array} = this.props;
        const state = this.state;
        return (
            <div className="carousel carousel-animated carousel-animate-slide">
                <div className='carousel-container'>   
                    {   img_array.map(function (img_elem: string, i : number) {
                            let img_link = img_elem.src
                            let class_name = "has-background carousel-item"
                            let order = 1;
                            if ( i === state.current_img_id) {
                                class_name += " is-active";
                            } else if ( i > state.current_img_id ) {
                                // on passe à up
                                order = i + state.upper_modificator
                            } else if ( i < state.current_img_id || i ===  state.current_img_id - 1 ) {
                                // on passe à down
                                order = i + state.down_modificator
                            } 
                            return (
                                <div key={i*order} className={class_name} style={{'order':order}}>
                                    <img  src={img_link} className="is-background"/>
                                    <div className="title">
                                        <h2>{img_elem.array_text[0]}</h2>
                                        <p>{img_elem.array_text[1]}</p>
                                        <p>{img_elem.array_text[2]}</p>
                                    </div>
                                </div>
                            );     
                        })
                    }  
                </div>
                <div className="carousel-navigation is-overlay">
                    <div className="carousel-nav-left">
                        <i onClick={this.slideinslider.bind(this,state.PREVIOUS)} className="fa fa-chevron-left btn-fa"></i>
                    </div>
                    <div className="carousel-nav-right">
                        <i onClick={this.slideinslider.bind(this,state.NEXT)} className="fa fa-chevron-right btn-fa"></i>
                    </div>
                </div>
            </div>    
        )
    }
}
        