import { type SidebarItemGroup, routeFor } from '../../../navigation';

export const APP_SIDEBAR_ITEMS: SidebarItemGroup[] = [
    {
        title: 'Todo',
        items: [
            {
                title: 'Scales',
                route: routeFor.showcase(''),
            },
        ],
    },
    {
        title: 'Archived',
        items: [
            {
                title: 'Category 1',
                route: routeFor.home(),
            },
            {
                title: 'Category 2',
                route: routeFor.home(),
            },
        ],
    },
    {
        title: 'Settings',
        items: [
            {
                title: 'Display',
                route: routeFor.home(),
            },
        ],
    },
];
