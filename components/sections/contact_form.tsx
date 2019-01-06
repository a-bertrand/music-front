import React from 'react';

import GenericForm from  '../generic/generic-form/index';
import GenericInput from '../generic/generic-form/input';

export default () => (
    <>
        <GenericForm>
            <GenericInput
                fonta="user"
                placeholder="Nom"
                name="contact_name"
                type="text"
                title=""
                className=" is-half"
            />
            <GenericInput
                fonta="phone"
                placeholder="Téléphone"
                name="contact_phone"
                type="tel"
                title=""
                className=" is-half"
            />
            <GenericInput
                fonta="envelope"
                placeholder="Email"
                name="contact_email"
                type="email"
                title="" 
                required={true}
            />
            <GenericInput
                fonta="user"
                placeholder="Position"
                name="contact_position"
                type="text"
                title=""
            />
        </GenericForm>
    </>
)