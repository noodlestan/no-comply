import { staticClassList } from '@noodlestan/context-ui-primitives';
import { NavLink } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import styles from './NavLinkPage.module.css';

export const NavLinkPage: Component = () => {
    const handlePress = () => console.info('Press');

    const COMPONENT = findComponent('NavLink');

    return (
        <DemoPage title="NavLink" classList={staticClassList(styles, 'NavLinkPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem row>
                    <NavLink href="#" current={false}>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" current={false}>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" current={false}>
                        Noodlestan
                    </NavLink>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="current">
                <DemoItem title="true" row>
                    <NavLink href="#" current={false}>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" current>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" current={false}>
                        Noodlestan
                    </NavLink>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem title="true">
                    <NavLink href="#" current={false} disabled>
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
        </DemoPage>
    );
};
