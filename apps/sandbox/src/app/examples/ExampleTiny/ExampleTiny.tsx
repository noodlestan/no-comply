import { Display, Icon, IconButton } from '@noodlestan/context-ui';
import { ClockIcon, SettingsIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import './ExampleTiny.css';

type ExampleSmallProps = { title?: string };

export const ExampleTiny: Component<ExampleSmallProps> = props => (
    <>
        <Icon size="s" icon={ClockIcon} />
        <Display level={4}>{props.title || 'Lorem ipsum'}</Display>
        <IconButton size="s" variant="primary" icon={SettingsIcon} />
    </>
);
