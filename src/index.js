import {registerBlockType} from '@wordpress/blocks';
import {InspectorControls} from '@wordpress/editor'
import {Form} from "./componets/Form";
import {TextControl} from '@wordpress/components';

const attributes = {
    defaultValue : {
        type: 'string',
        required: false,
        default: 'Default Default Value'
    },
    blockId: {
        type: 'string'
    }
};
const name = 'hydrate/test';
registerBlockType(name,{
    title: 'Hydrate Test',
    attributes,
    category: 'common',
    edit({attributes,setAttributes,className,clientId}){
        const {defaultValue,blockId} = attributes;
        const setDefaultValue = defaultValue => setAttributes({defaultValue});
        const setBlockId = blockId => setAttributes({blockId});
        if( clientId !== blockId ){
            setBlockId(clientId);
        }
        return  (
            <div>
                <InspectorControls>
                    <TextControl
                        onChange={setDefaultValue}
                        label={'Default Value For Form Field'}
                        value={defaultValue}
                    />
                </InspectorControls>
                <Form defaultValue={defaultValue} className={className} id={clientId}/>
            </div>
        )
    },
    save(props){
        const {attributes,className,clientId} = props;
        const {defaultValue,blockId} = attributes;
        return  <Form defaultValue={defaultValue} className={className} id={blockId} />
    }

});
