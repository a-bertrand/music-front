import React from 'react';

import GenericForm from  '../generic/generic-form/index';
import GenericInput from '../generic/generic-form/input';

export default () => (
    <>
        <GenericForm>
            <GenericInput
                fonta="user"
                placeholder="Nom"
                name="first_name"
                type="text"
                title=""
                className=" is-half"
            />
            <GenericInput
                fonta="user"
                placeholder="Prenom"
                name="last_name"
                type="text"
                title=""
                className=" is-half"
            />
            <GenericInput
                fonta="phone"
                placeholder="Téléphone"
                name="phone"
                type="tel"
                title=""
            />
            <GenericInput
                fonta="envelope"
                placeholder="Email"
                name="email"
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