import { ComponentName } from '../../../../data';

export type ItemLink = {
    component: ComponentName;
};

export type NavLinkGroup = {
    title: string;
    items: ItemLink[];
};
