import { COMPONENTS } from '../../../../../data';
import type { NavLinkGroup } from '../types';

const group = (name: string) => ({
    title: name,
    items: COMPONENTS.filter(c => c.group === name).map(({ name }) => ({
        component: name,
    })),
});

export const NAV_LINK_GROUPS: NavLinkGroup[] = [
    group('Actions'),
    group('Content'),
    group('Dialog'),
    group('Feedback'),
    group('Forms'),
    group('Layout'),
    group('Navigation'),
    group('Surface'),
    group('Typography'),
];
