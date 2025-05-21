import { staticClassList } from '@noodlestan/context-ui-primitives';
import {
    AnchoredPopover,
    Button,
    Divider,
    Menu,
    MenuItemAction,
    MenuItemGroup,
    MenuItemSubMenu,
} from '@noodlestan/standard-ui';
import { PencilIcon, TrashIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { DemoPage } from '../../../../templates';

import styles from './MenuPage.module.css';

export const MenuPage: Component = () => {
    const COMPONENT = findComponent('Menu');

    return (
        <DemoPage title="Menu" classList={staticClassList(styles, 'MenuPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="Demo">
                <DemoItem>
                    <AnchoredPopover
                        trigger={trigger => (
                            <Button variant="primary" {...trigger}>
                                ups!
                            </Button>
                        )}
                    >
                        {subMenu => (
                            <Menu labelledby={subMenu.labelledby}>
                                <MenuItemAction label="Open" />
                                <MenuItemAction label="Bar" />
                                <MenuItemGroup label="Operations">
                                    <MenuItemAction disabled label="Bat" />
                                    <MenuItemAction icon={PencilIcon} label="Rename" />
                                    <Divider />
                                    <MenuItemAction
                                        icon={TrashIcon}
                                        intent="negative"
                                        label="Delete"
                                    />
                                </MenuItemGroup>
                                <Divider />
                                <MenuItemGroup label="Grouped" description="omg!">
                                    <MenuItemAction label="Foo" />
                                    <MenuItemSubMenu label="More options">
                                        {({ subMenu }) => (
                                            <Menu {...subMenu}>
                                                <MenuItemAction label="Woah!Woah!Woah!Woah!Woah!Woah!" />
                                                <MenuItemAction label="Nice" />
                                            </Menu>
                                        )}
                                    </MenuItemSubMenu>
                                </MenuItemGroup>
                            </Menu>
                        )}
                    </AnchoredPopover>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem row note="Should override background color">
                    {/* <Menu classList={staticClassList(styles, 'override')}>Foobar</Menu> */}
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
