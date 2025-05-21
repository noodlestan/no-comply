import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Icon, NavLink, Text } from '@noodlestan/standard-ui';
import { SquareMousePointerIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { ROUTES } from '../../../../constants';
import { $ID_APP_TITLE } from '../../private/constants';

import styles from './HomeButton.module.scss';

export const HomeButton: Component = () => {
    return (
        <h1 classList={staticClassList(styles, 'HomeButton')} id={$ID_APP_TITLE}>
            <NavLink href={ROUTES.home()} nowrap inset>
                <Icon icon={SquareMousePointerIcon} size="medium" aria-hidden />
                <Text tag="span" variant="medium">
                    Context UI
                </Text>
            </NavLink>
        </h1>
    );
};
