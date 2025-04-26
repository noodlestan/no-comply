import { Icon } from '@noodlestan/standard-ui';
import { ClockIcon, SettingsIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

type ExampleSmallProps = { title?: string };

export const ExampleNano: Component<ExampleSmallProps> = () => (
    <>
        <Icon size="small" icon={ClockIcon} />
        <Icon size="small" icon={SettingsIcon} />
    </>
);
