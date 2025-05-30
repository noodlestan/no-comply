import { staticClassList } from '@no-comply/solid-primitives';
import { Menu, MenuItemAction } from '@no-comply/standard-ui';
import { TrashIcon } from 'lucide-solid';
import { type Component, type ParentComponent, splitProps } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, type DemoItemProps, DemoSection } from '../../private';

import styles from './MenuItemActionDemoPage.module.scss';

const DemoMenu: ParentComponent<DemoItemProps> = props => {
    const [locals, others] = splitProps(props, ['children']);

    return (
        <DemoItem {...others}>
            <Menu aria-labelledby="foo">{locals.children}</Menu>
        </DemoItem>
    );
};

export const MenuItemActionDemoPage: Component = () => {
    const handlePress = () => console.info('Click');

    const COMPONENT = findComponent('MenuItemAction');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'MenuItemActionDemoPage')}
        >
            <DemoSection title="defaults">
                <DemoMenu>
                    <MenuItemAction label="Foobar" />
                </DemoMenu>
            </DemoSection>

            <DemoSection title="variant">
                <DemoMenu title="plain">
                    <MenuItemAction variant="plain" label="Plain" />
                </DemoMenu>
                <DemoMenu title="secondary">
                    <MenuItemAction variant="secondary" label="Secondary" />
                </DemoMenu>
            </DemoSection>

            <DemoSection title="intent">
                <DemoMenu title="positive">
                    <MenuItemAction variant="plain" intent="positive" label="Plain" />
                    <MenuItemAction variant="secondary" intent="positive" label="Secondary" />
                    <MenuItemAction variant="plain" intent="positive" disabled label="Disabled" />
                </DemoMenu>
                <DemoMenu title="negative">
                    <MenuItemAction variant="plain" intent="negative" label="Plain" />
                    <MenuItemAction variant="secondary" intent="negative" label="Secondary" />
                    <MenuItemAction variant="plain" intent="negative" disabled label="Disabled" />
                </DemoMenu>
                <DemoMenu title="neutral">
                    <MenuItemAction variant="plain" intent="neutral" label="Plain" />
                    <MenuItemAction variant="secondary" intent="neutral" label="Secondary" />
                    <MenuItemAction variant="plain" intent="neutral" disabled label="Disabled" />
                </DemoMenu>
            </DemoSection>

            <DemoSection title="icon">
                <DemoMenu>
                    <MenuItemAction label="Active" intent="negative" icon={TrashIcon} />
                </DemoMenu>
            </DemoSection>

            <DemoSection title="description">
                <DemoMenu>
                    <MenuItemAction
                        label="Active"
                        intent="negative"
                        description="Lorem ipsum dolor sit amet"
                    />
                </DemoMenu>
            </DemoSection>

            <DemoSection title="disabled">
                <DemoMenu title="">
                    <MenuItemAction disabled label="Disabled" />
                </DemoMenu>
            </DemoSection>

            <DemoSection title="onPress">
                <DemoMenu note="see console log">
                    <MenuItemAction onPress={handlePress} label="Foobar" />
                </DemoMenu>
            </DemoSection>

            <DemoSection title="classList">
                <DemoMenu note="Should override background color">
                    <MenuItemAction
                        classList={staticClassList(styles, 'override')}
                        label="Foobar"
                    />
                </DemoMenu>
            </DemoSection>
        </ComponentDemoPage>
    );
};
