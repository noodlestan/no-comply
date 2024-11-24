import { Display, Flex, NavLink } from '@noodlestan/ui-system';
import { Component, For } from 'solid-js';

import { ROUTES } from '../../../constants';
import { NavLinkGroup } from '../types';

type NavLinkItemGroupProps = NavLinkGroup;

export const NavLinkItemGroup: Component<NavLinkItemGroupProps> = props => {
    return (
        <Flex direction="column" gap="s">
            <Display level={3} size="xs">
                {props.title}
            </Display>

            <For each={props.items}>
                {item => (
                    <NavLink size="s" href={ROUTES.component(item.component)}>
                        {item.component}
                    </NavLink>
                )}
            </For>
        </Flex>
    );
};
