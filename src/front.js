import {hydrate} from 'react-dom';
import {Form} from "./componets/Form";
import {useState, createContext, useContext} from '@wordpress/element';

/**
 * All DOM elements with block
 * @type {NodeListOf<Element>}
 */
const elements = document.querySelectorAll('.wp-block-hydrate-test');

/**
 * Create a context
 *
 * @see https://daveceddia.com/usecontext-hook/
 * @see https://reactjs.org/docs/context.html
 * @type {React.Context<any>}
 */
const FormContext = createContext();
const {Provider} = FormContext;

/**
 * Provide data for the form
 *
 * @param initalValue
 * @param children
 * @returns {*}
 * @constructor
 */
function FormDataProvider({initalValue, children}) {
    const [defaultValue, setValue] = useState(initalValue);
    const onChange = (event) => {
        setValue(event.target.value)
    };
    return (
        <Provider value={{
            defaultValue,
            onChange
        }}>
            {children}
        </Provider>
    );
}

/**
 * Form wrapped in context
 *
 * @param id
 * @returns {*}
 * @constructor
 */
const FormConsuming = ({id}) => {
    const {
        defaultValue,
        onChange
    } = useContext(FormContext);
    return (
        <Form defaultValue={defaultValue} onChange={onChange} id={id}/>
    );

};

/**
 * Show form value with context
 * @returns {*}
 * @constructor
 */
function DisplayConsuming() {
    const {
        defaultValue,
    } = useContext(FormContext);
    return (
        <div>{defaultValue}</div>

    )
}

/**
 * If we have any blocks hydrate ssr HTML
 */
if (elements.length) {
    elements.forEach(element => {
        const input = element.querySelector('.hydrate-test-field');
        const defaultValue = null !== input ? input.value : 'Hi Roy';
        const id = null !== input ? input.id : 'hi-roy';
        hydrate(
            <FormDataProvider initalValue={defaultValue}>
                <FormConsuming id={id}/>
                <DisplayConsuming/>
            </FormDataProvider>
            , element
        );
    })


}
