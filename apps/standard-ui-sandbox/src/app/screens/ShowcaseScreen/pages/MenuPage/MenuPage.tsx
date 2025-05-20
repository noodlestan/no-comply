import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Button, Divider, Menu, MenuItem } from '@noodlestan/standard-ui';
// import { PencilIcon, TrashIcon } from 'lucide-solid';
import { type Component, Show, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { DemoPage } from '../../../../templates';

import styles from './MenuPage.module.css';

export const MenuPage: Component = () => {
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);

    const handlePress = () => setIsMenuOpen(v => !v);

    const COMPONENT = findComponent('Menu');

    return (
        <DemoPage title="Menu" classList={staticClassList(styles, 'MenuPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="demo">
                <DemoItem>
                    <Button
                        id="button-1"
                        onPress={handlePress}
                        popoverTarget="menu-1"
                        popoverTargetAction="toggle"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        More options
                    </Button>
                    <Menu labelledby="button-1" id="menu-1">
                        <MenuItem id="item-id">Open</MenuItem>
                        <MenuItem>Bar</MenuItem>
                        {/* <MenuItemSub>More</MenuItemSub> */}
                        <Divider />
                        <MenuItem>Foo</MenuItem>
                        <MenuItem>Baz</MenuItem>
                        {/* <MenuItemGroup>
                                <MenuItemGroupLabel>Options</MenuItemGroupLabel>
                                <MenuItem checked={true}>Show Grid</MenuItem>
                                <MenuItem disabled>Bat</MenuItem>
                                <MenuItem icon={PencilIcon}>Rename</MenuItem>
                                <Divider />
                                <MenuItem icon={TrashIcon} intent="negative">
                                    Delete
                                </MenuItem>
                            </MenuItemGroup> */}
                        <Button
                            id="button-2"
                            onPress={handlePress}
                            popoverTarget="menu-2"
                            popoverTargetAction="toggle"
                        >
                            Even more options
                        </Button>
                        <Menu labelledby="button-2" id="menu-2">
                            <MenuItem>Owah</MenuItem>
                            <MenuItem>Nice</MenuItem>
                        </Menu>
                    </Menu>
                    <button popoverTarget="bar" popoverTargetAction="toggle">
                        open
                    </button>
                    <div id="bar" popover>
                        Popover content
                    </div>
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
