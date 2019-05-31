import {hydrate} from 'react-dom';
import {Form} from "./componets/Form";
import {useState} from '@wordpress/element';
const elements = document.querySelectorAll('.wp-block-hydrate-test');
const App = ({defaultValue,id,onSubmit}) => {
    const [value,setValue] = useState(defaultValue);
    return (
        <Form
            onChange={onChange}
            defaultValue={defaultValue}
            id={id}
            onSubmit={onSubmit}
        />
    );
};
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
