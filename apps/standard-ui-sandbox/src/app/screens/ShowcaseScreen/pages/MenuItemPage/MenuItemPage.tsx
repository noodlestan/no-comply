import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Menu, MenuItem } from '@noodlestan/standard-ui';
import { type Component, type ParentComponent, splitProps } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, type DemoItemProps } from '../../../../components';
import { DemoPage } from '../../../../templates';

import styles from './MenuItemPage.module.css';

const DemoMenu: ParentComponent<DemoItemProps> = props => {
    const [locals, others] = splitProps(props, ['children']);

    return (
        <DemoItem row {...others}>
            <Menu label="Example menu">{locals.children}</Menu>
        </DemoItem>
    );
};

export const MenuItemPage: Component = () => {
    const handlePress = () => console.info('Click');

    const COMPONENT = findComponent('MenuItem');

    return (
        <DemoPage title="MenuItem" classList={staticClassList(styles, 'MenuItemPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoMenu row>
                    <MenuItem>Foobar</MenuItem>
                </DemoMenu>
            </DemoGroup>
            <DemoGroup title="variant">
                <DemoMenu row title="plain">
                    <MenuItem variant="plain">Plain</MenuItem>
                </DemoMenu>
                <DemoMenu row title="secondary">
                    <MenuItem variant="secondary">Secondary</MenuItem>
                </DemoMenu>
            </DemoGroup>
            <DemoGroup title="intent">
                <DemoMenu row title="positive">
                    <MenuItem variant="plain" intent="positive">
                        Plain
                    </MenuItem>
                    <MenuItem variant="secondary" intent="positive">
                        Secondary
                    </MenuItem>
                    <MenuItem variant="plain" intent="positive" disabled>
                        Disabled
                    </MenuItem>
                </DemoMenu>
                <DemoMenu row title="negative">
                    <MenuItem variant="plain" intent="negative">
                        Plain
                    </MenuItem>
                    <MenuItem variant="secondary" intent="negative">
                        Secondary
                    </MenuItem>
                    <MenuItem variant="plain" intent="negative" disabled>
                        Disabled
                    </MenuItem>
                </DemoMenu>
                <DemoMenu row title="neutral">
                    <MenuItem variant="plain" intent="neutral">
                        Plain
                    </MenuItem>
                    <MenuItem variant="secondary" intent="neutral">
                        Secondary
                    </MenuItem>
                    <MenuItem variant="plain" intent="neutral" disabled>
                        Disabled
                    </MenuItem>
                </DemoMenu>
            </DemoGroup>
            <DemoGroup title="active">
                <DemoMenu row title="">
                    <MenuItem active>Active</MenuItem>
                </DemoMenu>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoMenu row title="">
                    <MenuItem disabled>Disabled</MenuItem>
                </DemoMenu>
            </DemoGroup>
            <DemoGroup title="onPress">
                <DemoMenu row note="see console log">
                    <MenuItem onPress={handlePress}>Foobar</MenuItem>
                </DemoMenu>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoMenu row note="Should override background color">
                    <MenuItem classList={staticClassList(styles, 'override')}>Foobar</MenuItem>
                </DemoMenu>
            </DemoGroup>
        </DemoPage>
    );
};
