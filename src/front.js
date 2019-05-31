import {hydrate} from 'react-dom';
import {Form} from "./componets/Form";

const elements = document.querySelectorAll('.wp-block-hydrate-test');
console.log(elements.length);
if (elements.length) {
    elements.forEach(element => {
        const input = element.querySelector( '.hydrate-test-field' );
        const defaultValue = null !== input ? input.value : 'Hi Roy';
        const id = null !== input  ? input.id : 'hi-roy';
        hydrate(<Form
            defaultValue={defaultValue}
            id={id}
        />,element);
    })
}
