import { Divider, Flex, Icon, NavLink } from '@noodlestan/ui-system';
import { HomeIcon } from 'lucide-solid';
import { Component, For } from 'solid-js';

import { ROUTES } from '../../constants';

import './MainNav.css';
import { NavLinkItemGroup } from './components/NavLinkItemGroup';
import { navList } from './constants';

export const MainNav: Component = () => {
    return (
        <Flex classList={{ MainNav: true }} direction="column" role="menu" padding="m" gap="m">
            <Flex direction="column" gap="m" classList={{ Header: true }}>
                <Flex direction="row" gap="s">
                    <NavLink size="s" href={ROUTES.home()}>
                        <Icon icon={HomeIcon} size="s" />
                        <>UI System</>
                    </NavLink>
                </Flex>
                <Divider variant="base" />
            </Flex>
            <For each={navList}>
                {item => <NavLinkItemGroup title={item.title} items={item.items} />}
            </For>
        </Flex>
    );
};
