import {hydrate} from 'react-dom';
import {Form} from "./componets/Form";
import {useState, createPortal,render} from '@wordpress/element';

const elements = document.querySelectorAll('.wp-block-hydrate-test');
const App = ({defaultValue, id, onSubmit}) => {
    const [value, setValue] = useState(defaultValue);
    return (
        <div>
            <p>{value}</p>
            <Form
                onChange={(event) => {setValue(event.target.value)}}
                defaultValue={value}
                id={id}
                onSubmit={onSubmit}
            />
        </div>

    );
};
if (elements.length) {

    elements.forEach(element => {
        const input = element.querySelector('.hydrate-test-field');
        const defaultValue = null !== input ? input.value : 'Hi Roy';
        const id = null !== input ? input.id : 'hi-roy';
        const newDiv = document.createElement("div");
        const appId = 'wp-block-hydrate-test-root-'+ id;
        newDiv.id = 'wp-block-hydrate-test-root-'+ id;
        document.body.appendChild(newDiv);
        render(<App
            defaultValue={defaultValue}
            id={id}

        />,newDiv )
    });



}
