import React from 'react';

interface State  {
    validate : boolean;
}


export default class GenericInput extends React.Component<Field, State> {
    constructor(props : Field) {
        super(props)
        this.state = {
            validate  : false
        };
    }
    handleinternChange(event : any) {    
        let value_length = event.target.value.length;
        if(event.target.checkValidity() && value_length > 2) {
            this.setState({validate:true});
        } else {
            this.setState({validate:false});
        }
        this.props.handleChange(event);
    }
    render() {
        const props         = this.props;
        let faclass         = "fa fa-";
        let checkclass      = "fa fa-check";
        let class_input     = "";
        if (this.state.validate){
            checkclass  += " is-success";
            class_input += " is-success";
        } 
        if( props.className ) {
            class_input += props.className;
        }
        if(props.fonta){
            faclass += props.fonta;
        }
        if (props.type !== "textarea"){
            class_input += " input";
            return (  
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        {props.title ? <label>{props.title}</label> : ''}
                        <input
                            className={class_input}
                            id={props.name}
                            name={props.name}
                            type={props.type}
                            value={props.value}
                            onChange={this.handleinternChange.bind(this)}
                            onKeyUp={this.handleinternChange.bind(this)}
                            placeholder={props.placeholder}
                            required = {props.required}
                        />
                        <span className="icon is-small is-left">
                            <i className={faclass}></i>
                        </span>
                    </p>
                </div>
            );
        } else {
            class_input += " textarea";
            return (
                <div className="field">
                    <p className="control">
                        {props.title ? <label>{props.title}</label> : ''}
                        <textarea
                            className={class_input}
                            id={props.name}
                            name={props.name}
                            value={props.value}
                            onChange={this.handleinternChange.bind(this)}
                            onKeyUp={this.handleinternChange.bind(this)}
                            required = {props.required}
                        >
                        </textarea>
                    </p>
                </div>               
            );
        }
    }
}
