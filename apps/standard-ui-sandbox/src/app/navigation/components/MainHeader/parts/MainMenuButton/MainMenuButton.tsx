import { createIconValue } from '@noodlestan/context-ui';
import { staticClassList } from '@noodlestan/context-ui-primitives';
import type { ExpandButtonIcons, ExpandButtonLabels } from '@noodlestan/headless-ui';
import { ExpandButton } from '@noodlestan/standard-ui';
import { MenuIcon, XIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { $ID_SIDEBAR_NAV } from '../../../private';

import styles from './MainMenuButton.module.css';

interface Props {
    setButtonRef: (el: HTMLElement) => void;
    expanded: boolean;
    onPress: () => void;
}

const LABELS: ExpandButtonLabels = {
    expanded: 'Close main menu',
    collapsed: 'Open main menu',
};

const ICONS: ExpandButtonIcons = {
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
            ref={props.setButtonRef}
            expanded={props.expanded}
            icons={ICONS}
            labels={LABELS}
            onPress={handlePress}
            controls={$ID_SIDEBAR_NAV}
            classList={staticClassList(styles, 'MainMenuButton')}
        />
    );
};
