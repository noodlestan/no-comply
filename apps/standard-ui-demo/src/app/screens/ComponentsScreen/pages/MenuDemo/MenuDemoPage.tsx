import { staticClassList } from '@no-comply/solid-primitives';
import {
    AnchoredPopover,
    IconButton,
    Menu,
    MenuItemAction,
    MenuItemGroup,
    MenuItemSubMenu,
} from '@no-comply/standard-ui';
import { MoreHorizontalIcon, PencilIcon, TrashIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './MenuDemoPage.module.scss';

export const MenuDemoPage: Component = () => {
    const COMPONENT = findComponent('Menu');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'MenuDemoPage')}
        >
            <DemoSection title="Demo">
                <DemoItem>
                    <AnchoredPopover
                        direction="inline"
                        trigger={trigger => (
                            <IconButton
                                variant="secondary"
                                icon={MoreHorizontalIcon}
                                {...trigger}
                                label="Foo Menu"
                            />
                        )}
                    >
                        {content => (
                            <Menu aria-labelledby={content['aria-labelledby']}>
                                <MenuItemGroup>
                                    <MenuItemAction label="Open" />
                                    <MenuItemAction label="Bar" />
                                </MenuItemGroup>
                                <MenuItemGroup label="Operations">
                                    <MenuItemAction disabled label="Bat" />
                                    <MenuItemAction icon={PencilIcon} label="Rename" />
                                    <MenuItemAction
                                        icon={TrashIcon}
                                        intent="negative"
                                        label="Delete"
                                    />
                                </MenuItemGroup>
                                <MenuItemGroup label="Grouped">
                                    <MenuItemAction label="Foo" />
                                    <MenuItemSubMenu label="More options">
                                        {({ subMenu }) => (
                                            <Menu {...subMenu}>
                                                <MenuItemAction label="Long option that opens a dialog..." />
                                                <MenuItemAction label="Short option" />
                                            </Menu>
                                        )}
                                    </MenuItemSubMenu>
                                </MenuItemGroup>
                            </Menu>
                        )}
                    </AnchoredPopover>
                </DemoItem>
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem row note="Should override background color">
                    {/* <Menu classList={staticClassList(styles, 'override')}>Foobar</Menu> */}
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
