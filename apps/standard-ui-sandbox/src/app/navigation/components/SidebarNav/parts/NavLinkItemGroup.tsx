import { useFocusTarget } from '@noodlestan/context-ui';
import { Display, Flex, NavLink } from '@noodlestan/standard-ui';
import { type Component, For } from 'solid-js';

import { $ID_SCREEN_MAIN, SCREEN_MAIN_TARGET } from '../../../../templates';
import { ROUTES } from '../../../constants';
import type { NavLinkGroup } from '../types';

type NavLinkItemGroupProps = NavLinkGroup;

export const NavLinkItemGroup: Component<NavLinkItemGroupProps> = props => {
    const [setMainFocus] = useFocusTarget(SCREEN_MAIN_TARGET);

    const handleNavLink = () => {
        setTimeout(() => {
            setMainFocus();
        });
    };

    return (
        <Flex direction="column" gap="xs">
            <Display level={3} variant="s">
                {props.title}
            </Display>

            <For each={props.items}>
                {item => (
                    <NavLink
                        href={ROUTES.component(item.component) + `#${$ID_SCREEN_MAIN}`}
                        onPress={handleNavLink}
                    >
                        {item.component}
                    </NavLink>
                )}
            </For>
        </Flex>
    );
};
