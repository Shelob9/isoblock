import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls } from "@wordpress/block-editor";
import { Form } from "./components/Form";
import { TextControl } from "@wordpress/components";

const attributes = {
  defaultValue: {
    type: "string",
    required: false,
    default: "Default Default Value"
  },
  blockId: {
    type: "string"
  }
};

/**
 * Save callback for block
 */
export const save = props => {
  const { attributes, className, clientId } = props;
  const { defaultValue, blockId } = attributes;
  return (
    <Form defaultValue={defaultValue} className={className} id={blockId} />
  );
};

/**
 * Edit callback for block
 */
export const edit = ({ attributes, setAttributes, className, clientId }) => {
  const { defaultValue, blockId } = attributes;
  const setDefaultValue = defaultValue => setAttributes({ defaultValue });
  const setBlockId = blockId => setAttributes({ blockId });
  if (clientId !== blockId) {
    setBlockId(clientId);
  }
  return (
    <div>
      <InspectorControls>
        <TextControl
          onChange={setDefaultValue}
          label={"Default Value For Form Field"}
          value={defaultValue}
        />
      </InspectorControls>
      <Form
        defaultValue={defaultValue}
        className={className}
        id={clientId}
        onChange={event => {
          console.log(event);
          setDefaultValue(event.target.value);
        }}
      />
    </div>
  );
};
const name = "josh/isoblock";
registerBlockType(name, {
  title: "Hydrate Demo",
  attributes,
  category: "common",
  edit,
  save
});
