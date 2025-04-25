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
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Callout',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Checkbox',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'DataItem',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'DataValue',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Display',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Divider',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Flex',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Icon',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'IconButton',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Label',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Link',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'NavLink',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'NumberInput',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'RangeInput',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Select',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Surface',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'TextInput',
        package: '@noodlestan/context-ui',
    },
    {
        name: 'Text',
        package: '@noodlestan/context-ui',
    },
];

export const findComponent = (name: string): ComponentMetadata => {
    const found = COMPONENTS.find(c => c.name === name);
    if (!found) {
        throw new Error(`Unknown component "${name}".`);
    }
    return found;
};
