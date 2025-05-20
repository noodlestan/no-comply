export type ComponentGroup =
    | 'Actions'
    | 'Content'
    | 'Forms'
    | 'Layout'
    | 'Menus'
    | 'Navigation'
    | 'Feedback'
    | 'Surface'
    | 'Typography';

export type ComponentName =
    | 'Button'
    | 'Callout'
    | 'Canvas'
    | 'Checkbox'
    | 'CloseButton'
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
    | 'Menu'
    | 'MenuItem'
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
    group: ComponentGroup;
    package: string;
};

export const COMPONENTS: ComponentMetadata[] = [
    {
        name: 'Button',
        group: 'Actions',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Callout',
        group: 'Content',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Checkbox',
        group: 'Forms',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'CloseButton',
        group: 'Actions',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'DataItem',
        group: 'Content',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'DataValue',
        group: 'Content',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Display',
        group: 'Typography',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Divider',
        group: 'Layout',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'ExpandButton',
        group: 'Actions',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Flex',
        group: 'Layout',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Icon',
        group: 'Content',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'IconButton',
        group: 'Actions',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Layout',
        group: 'Layout',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Label',
        group: 'Typography',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Link',
        group: 'Navigation',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Menu',
        group: 'Menus',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'MenuItem',
        group: 'Menus',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'NavLink',
        group: 'Navigation',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'NumberInput',
        group: 'Forms',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'RangeInput',
        group: 'Forms',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Select',
        group: 'Forms',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Surface',
        group: 'Surface',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'TextInput',
        group: 'Forms',
        package: '@noodlestan/standard-ui',
    },
    {
        name: 'Text',
        group: 'Typography',
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
