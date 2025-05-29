import type { ExpandActionIcons, ExpandActionLabels } from '@no-comply/solid-composables';
import { createIconValue } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';
import { ExpandButton } from '@no-comply/standard-ui';
import { MenuIcon, XIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { $ID_SIDEBAR_NAV } from '../../../private';

import styles from './MainMenuButton.module.scss';

type Props = {
    ref?: (el: HTMLElement) => void;
    expanded: boolean;
    onPress: () => void;
};

const LABELS: ExpandActionLabels = {
    expanded: 'Close main menu',
    collapsed: 'Open main menu',
};

const ICONS: ExpandActionIcons = {
    expanded: createIconValue(XIcon),
    collapsed: createIconValue(MenuIcon),
};

export const MainMenuButton: Component<Props> = props => {
    const handlePress = (ev: Event) => {
        ev.stopImmediatePropagation();
        props.onPress();
    };

    return (
        <ExpandButton
            ref={props.ref}
            expanded={props.expanded}
            icons={ICONS}
            labels={LABELS}
            onPress={handlePress}
            controls={$ID_SIDEBAR_NAV}
            classList={staticClassList(styles, 'MainMenuButton')}
        />
    );
};
