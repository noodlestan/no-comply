import { Menu, MenuItemAction } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'primary', props }, () => (
        <Menu aria-label="foo">
            <MenuItemAction variant="primary" label="Primary" />
            <MenuItemAction variant="primary" disabled label="Disabled" />
        </Menu>
    )),
    createDemoItem({ title: 'secondary', props: { ...props, defaultValue: true } }, () => (
        <Menu aria-label="foo">
            <MenuItemAction variant="secondary" label="Secondary" />
            <MenuItemAction variant="secondary" disabled label="Disabled" />
        </Menu>
    )),
    createDemoItem({ title: 'plain', props }, () => (
        <Menu aria-label="foo">
            <MenuItemAction variant="plain" label="Plain" />
            <MenuItemAction variant="plain" disabled label="Disabled" />
        </Menu>
    )),
];

export default createDemoSectionData({
    title: 'variant',
    items,
});
