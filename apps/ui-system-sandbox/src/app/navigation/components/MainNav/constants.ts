import type { NavLinkGroup } from './types';

export const navList: NavLinkGroup[] = [
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
    {
        title: 'Icons',
        items: [
            {
                component: 'Icon',
            },
        ],
    },
    {
        title: 'Actions',
        items: [
            {
                component: 'Button',
            },
            {
                component: 'IconButton',
            },
            {
                component: 'Link',
            },
            {
                component: 'NavLink',
            },
        ],
    },
    {
        title: 'Feedback',
        items: [
            {
                component: 'Banner',
            },
        ],
    },
    {
        title: 'Data',
        items: [
            {
                component: 'DataValue',
            },
            {
                component: 'DataItem',
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
        title: 'Layout',
        items: [
            {
                component: 'Surface',
            },
            {
                component: 'Flex',
            },
            {
                component: 'Divider',
            },
        ],
    },
];
