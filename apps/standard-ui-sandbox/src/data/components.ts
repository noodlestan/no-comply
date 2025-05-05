export type ComponentName =
    | 'Button'
    | 'Callout'
    | 'Canvas'
    | 'Checkbox'
    | 'DataItem'
    | 'DataValue'
    | 'Dialog'
    | 'Display'
    | 'Divider'
    | 'ExpandButton'
    | 'Field'
    | 'FieldLabel'
    | 'Flex'
    | 'Form'
    | 'Icon'
    | 'IconButton'
    | 'Label'
    | 'Layout'
    | 'Link'
    | 'MessageBox'
    | 'MessageToast'
    | 'NavLink'
    | 'NumberInput'
    | 'RangeInput'
    | 'Select'
    | 'Surface'
    | 'Text'
    | 'TextInput';

export type ComponentMetadata = {
    name: ComponentName;
    package: string;
};

export const COMPONENTS: ComponentMetadata[] = [
    {
        name: 'Button',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Callout',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Checkbox',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'DataItem',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'DataValue',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Display',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Divider',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Flex',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Icon',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'IconButton',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Layout',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Label',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Link',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'NavLink',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'NumberInput',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'RangeInput',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Select',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Surface',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'TextInput',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Text',
        package: '@noodlestan/standard-ui',
    },
];

export const findComponent = (name: string): ComponentMetadata => {
    const found = COMPONENTS.find(c => c.name === name);
    if (!found) {
        throw new Error(`Unknown component "${name}".`);
    }
    return found;
};
