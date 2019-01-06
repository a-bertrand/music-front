import React from 'react'

interface Props {
    title_validate : string;
}
interface State {
    email_send : boolean;
    fields : any;
}

export default class GenericForm extends React.Component <Props> {
    constructor(props: any) {
        super(props);
        this.state = {
            email_send : false,
            fields :{}
        }
    }
    handleOnsubmit(event: any) {
        event.preventDefault();
            const fields = this.state.fields
            //TODO
            /*
            const api_url = '/post/quote-requests';
            fetch(api_url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify( fields )
            }).then( r => {
                if(r.status === 201) {
                    this.setState({email_send : true})
                }
            })  
            */  
    }
    handleChange(event: any) {
        let name  = event.target.name;
        let value = event.target.value;
        this.setState(prevState => ({
            fields:
                { ...prevState.fields, [name]: value }
        }))
    }
    render() {
        const { children } = this.props;
        let this_component = this;
        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { handleChange: this_component.handleChange.bind(this_component) })
        );
        if(this.state.email_send === false){
            return (
                <form onSubmit={this.handleOnsubmit.bind(this)}>
                    <fieldset className="box">
                        {childrenWithProps}
                        <button type="submit" className="button is-success is-outlined">{this.props.title_validate ? this.props.title_validate : 'Valider' }</button>
                    </fieldset>
                </form>
            )
        } else {
            return (
                <div className="notification is-primary">
                    Email envoyé, merci ! Zéro-Gachis vous contactera rapidement. 
                </div>
            )     
        }
            
    }
}

/*
contact_name
contact_phone
contact_email
shop_name
contact_position

*/