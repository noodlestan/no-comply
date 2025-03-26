import { Icon } from '@noodlestan/context-ui';
import { ClockIcon, SettingsIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import './ExampleNano.css';

type ExampleSmallProps = { title?: string };

export const ExampleNano: Component<ExampleSmallProps> = () => (
    <>
        <Icon size="s" icon={ClockIcon} />
        <Icon size="s" icon={SettingsIcon} />
    </>
);
