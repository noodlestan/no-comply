export type ComponentName =
    | 'Banner'
    | 'Button'
    | 'Checkbox'
    | 'DataItem'
    | 'DataValue'
    | 'Display'
    | 'Divider'
    | 'Flex'
    | 'Icon'
    | 'IconButton'
    | 'Label'
    | 'Link'
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
        name: 'Banner',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Button',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Checkbox',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'DataItem',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'DataValue',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Display',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Divider',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Flex',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Icon',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'IconButton',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Label',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Link',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'NavLink',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'NumberInput',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'RangeInput',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Select',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Surface',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'TextInput',
        package: '@noodlestan/ui-system',
    },
    {
        name: 'Text',
        package: '@noodlestan/ui-system',
    },
];

export const findComponent = (name: string): ComponentMetadata => {
    const found = COMPONENTS.find(c => c.name === name);
    if (!found) {
        throw new Error(`Unknown component "${name}".`);
    }
    return found;
};
