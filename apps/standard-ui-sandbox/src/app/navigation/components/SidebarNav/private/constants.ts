import type { NavLinkGroup } from '../types';

export const NAV_LINK_GROUPS: NavLinkGroup[] = [
    {
        title: 'Actions',
        items: [
            {
                component: 'Button',
            },
            {
                component: 'ExpandButton',
            },
            {
                component: 'IconButton',
            },
        ],
    },
    {
        title: 'Content',
        items: [
            {
                component: 'Callout',
            },
            {
                component: 'Canvas',
            },
            {
                component: 'DataItem',
            },
            {
                component: 'DataValue',
            },
        ],
    },
    {
        title: 'Dialogs',
        items: [
            {
                component: 'Dialog',
            },
        ],
    },
    {
        title: 'Feedback',
        items: [
            {
                component: 'MessageBox',
            },
            {
                component: 'MessageToast',
            },
        ],
    },
    {
        title: 'Forms',
        items: [
            {
                component: 'Label',
            },
            {
                component: 'TextInput',
            },
            {
                component: 'NumberInput',
            },
            {
                component: 'RangeInput',
            },
            {
                component: 'Select',
            },
            {
                component: 'Checkbox',
            },
        ],
    },
    {
        title: 'Icons',
        items: [
            {
                component: 'Icon',
            },
        ],
    },
    {
        title: 'Layout',
        items: [
            {
                component: 'Flex',
            },
            {
                component: 'Layout',
            },
            {
                component: 'Divider',
            },
        ],
    },
    {
        title: 'Navigation',
        items: [
            {
                component: 'Link',
            },
            {
                component: 'NavLink',
            },
        ],
    },
    {
        title: 'Surface',
        items: [
            {
                component: 'Surface',
            },
        ],
    },
    {
        title: 'Typography',
        items: [
            {
                component: 'Display',
            },
            {
                component: 'Text',
            },
        ],
    },
];
