import { staticClassList } from '@no-comply/solid-primitives';
import { NavLink } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import styles from './NavLinkDemoPage.module.scss';

export const NavLinkDemoPage: Component = () => {
    const handlePress = () => console.info('Press');

    const COMPONENT = findComponent('NavLink');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'NavLinkDemoPage')}
        >
            <DemoGroup title="defaults">
                <DemoItem row>
                    <NavLink href="/features/components/NavLink">NavLink</NavLink>
                    <NavLink href="/features/components/Button">Button</NavLink>
                    <NavLink href="/features/components/IconButton">IconButton</NavLink>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="current">
                <DemoItem title="true/false" row>
                    <NavLink href="#" current={false}>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" current={false}>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" current={true}>
                        Noodlestan
                    </NavLink>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="disabled">
                <DemoItem title="true">
                    <NavLink href="/foobar" disabled>
                        Foobar
                    </NavLink>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="current + disabled">
                <DemoItem title="true">
                    <NavLink href="#" current disabled>
                        Foobar
                    </NavLink>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="onPress">
                <DemoItem note="See console log">
                    <NavLink href="#" current={false} onPress={handlePress}>
                        Foobar
                    </NavLink>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <NavLink
                        href="#"
                        current={false}
                        classList={staticClassList(styles, 'override')}
                    >
                        Foobar
                    </NavLink>
                </DemoItem>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
