import {hydrate} from 'react-dom';
import {Form} from "./components/Form";
import {useState, createContext, useContext} from '@wordpress/element';

/**
 * All DOM elements with block
 * @type {NodeListOf<Element>}
 */
const elements = document.querySelectorAll('.wp-block-josh-isoblock');

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
 */
function FormProvider({initalValue, children}) {
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
 */
const FormDataUpdateConsumer = ({id}) => {
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
 */
function FormDataDisplayConsumer() {
    const {
        defaultValue,
    } = useContext(FormContext);
    return (
        <div>{defaultValue}</div>

    )
}

/**
 * If we have any blocks hydrate the server-side renderered HTML
 */
if (elements.length) {
    elements.forEach(element => {
        //Find the input
        const input = element.querySelector('.isoblock-field');
        //Find default value
        const defaultValue = null !== input ? input.value : 'Hi Roy';
        //Find the input ID attribute
        const id = null !== input ? input.id : 'hi-roy';
        hydrate(
            <FormProvider initalValue={defaultValue}>
                <FormDataUpdateConsumer id={id}/>
                <FormDataDisplayConsumer/>
            </FormProvider>
            ,element
        );
    })


}
