import { Display, Divider, Flex, Icon, NavLink } from '@noodlestan/ui-system';
import { HomeIcon } from 'lucide-solid';
import { Component } from 'solid-js';

import { ROUTES } from '../../constants';

import './MainNav.css';

export const MainNav: Component = () => {
    return (
        <Flex classList={{ MainNav: true }} direction="column" role="menu" padding="m" gap="m">
            <Flex direction="column" gap="m">
                <Flex direction="row" gap="s">
                    <NavLink size="s" href={ROUTES.home()}>
                        <Icon icon={HomeIcon} size="s" />
                        <>UI System</>
                    </NavLink>
                </Flex>
                <Divider variant="base" />
            </Flex>
            <Flex direction="column" gap="s">
                <Display level={3} size="xs">
                    Typography
                </Display>

                <NavLink size="s" href={ROUTES.component('Display')}>
                    Display
                </NavLink>
                <NavLink size="s" href={ROUTES.component('Text')}>
                    Text
                </NavLink>
            </Flex>
            <Flex direction="column" gap="s">
                <Display level={3} size="xs">
                    Actions
                </Display>
                <NavLink size="s" href={ROUTES.component('Button')}>
                    Button
                </NavLink>
                <NavLink size="s" href={ROUTES.component('IconButton')}>
                    IconButton
                </NavLink>
                <NavLink size="s" href={ROUTES.component('Link')}>
                    Link
                </NavLink>
                <NavLink size="s" href={ROUTES.component('NavLink')}>
                    NavLink
                </NavLink>
            </Flex>
            <Flex direction="column" gap="s">
                <Display level={3} size="xs">
                    Feedback
                </Display>

                <NavLink size="s" href={ROUTES.component('Banner')}>
                    Banner
                </NavLink>
            </Flex>
            <Flex direction="column" gap="s">
                <Display level={3} size="xs">
                    Data
                </Display>

                <NavLink size="s" href={ROUTES.component('DataValue')}>
                    DataValue
                </NavLink>
                <NavLink size="s" href={ROUTES.component('DataItem')}>
                    DataItem
                </NavLink>
            </Flex>
            <Flex direction="column" gap="s">
                <Display level={3} size="xs">
                    Forms
                </Display>

                <NavLink size="s" href={ROUTES.component('Label')}>
                    Label
                </NavLink>
                {/* <NavLink size="s" href={ROUTES.component('FieldsetLabel')}>FieldsetLabel</NavLink> */}
                {/* <NavLink size="s" href={ROUTES.component('Field')}>Field</NavLink> */}
                <NavLink size="s" href={ROUTES.component('TextInput')}>
                    TextInput
                </NavLink>
                <NavLink size="s" href={ROUTES.component('NumberInput')}>
                    NumberInput
                </NavLink>
                <NavLink size="s" href={ROUTES.component('RangeInput')}>
                    RangeInput
                </NavLink>
                <NavLink size="s" href={ROUTES.component('Select')}>
                    Select
                </NavLink>
            </Flex>
            <Flex direction="column" gap="s">
                <Display level={3} size="xs">
                    Layout
                </Display>

                <NavLink size="s" href={ROUTES.component('Surface')}>
                    Surface
                </NavLink>
                <NavLink size="s" href={ROUTES.component('Flex')}>
                    Flex
                </NavLink>
                <NavLink size="s" href={ROUTES.component('Divider')}>
                    Divider
                </NavLink>
            </Flex>
        </Flex>
    );
};
