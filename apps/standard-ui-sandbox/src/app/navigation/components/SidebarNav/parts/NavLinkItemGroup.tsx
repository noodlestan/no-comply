import { Display, Flex, NavLink } from '@noodlestan/standard-ui';
import { type Component, For } from 'solid-js';

import { ROUTES } from '../../../constants';
import type { NavLinkGroup } from '../types';

type NavLinkItemGroupProps = NavLinkGroup;

export const NavLinkItemGroup: Component<NavLinkItemGroupProps> = props => {
    return (
        <Flex direction="column" gap="xs">
            <Display level={3} variant="s">
                {props.title}
            </Display>

            <For each={props.items}>
                {item => (
                    <NavLink href={ROUTES.component(item.component)}>{item.component}</NavLink>
                )}
            </For>
        </Flex>
    );
};
