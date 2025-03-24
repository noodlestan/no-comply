import { Divider, Flex, Icon, NavLink } from '@noodlestan/ui-system';
import { HomeIcon } from 'lucide-solid';
import { type Component, For } from 'solid-js';

import { ROUTES } from '../../constants';

import './MainNav.css';
import { NavLinkItemGroup } from './components/NavLinkItemGroup';
import { navList } from './constants';

export const MainNav: Component = () => {
    return (
        <Flex
            tag="nav"
            direction="column"
            padding="m"
            gap="m"
            classList={{ MainNav: true }}
            aria-label="main navigation"
        >
            <Flex tag="header" direction="column" gap="m" classList={{ Header: true }}>
                <Flex direction="row" gap="s">
                    <NavLink size="s" href={ROUTES.home()}>
                        <Icon icon={HomeIcon} size="s" />
                        <>UI System</>
                    </NavLink>
                </Flex>
            </Flex>
            <Divider variant="base" />
            <For each={navList}>
                {item => <NavLinkItemGroup title={item.title} items={item.items} />}
            </For>
        </Flex>
    );
};
