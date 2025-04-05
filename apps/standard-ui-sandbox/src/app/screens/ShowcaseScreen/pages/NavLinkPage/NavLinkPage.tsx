import { staticClassList } from '@noodlestan/context-ui-types';
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
                    <NavLink href="#" active={false}>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" active={false}>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" active={false}>
                        Noodlestan
                    </NavLink>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="active">
                <DemoItem title="true" row>
                    <NavLink href="#" active={false}>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" active>
                        Noodlestan
                    </NavLink>
                    <NavLink href="#" active={false}>
                        Noodlestan
                    </NavLink>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem title="true">
                    <NavLink href="#" active={false} disabled>
                        Foobar
                    </NavLink>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="active + disabled">
                <DemoItem title="true">
                    <NavLink href="#" active disabled>
                        Foobar
                    </NavLink>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onPress">
                <DemoItem note="See console log">
                    <NavLink href="#" active={false} onPress={handlePress}>
                        Foobar
                    </NavLink>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <NavLink href="#" active={false} classList={{ override: true }}>
                        Foobar
                    </NavLink>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
