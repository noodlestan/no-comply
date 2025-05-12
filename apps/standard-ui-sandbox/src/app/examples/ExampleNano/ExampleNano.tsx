import { Icon } from '@noodlestan/standard-ui';
import { ClockIcon, SettingsIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

type Props = { title?: string };

export const ExampleNano: Component<Props> = () => (
    <>
        <Icon size="small" icon={ClockIcon} />
        <Icon size="small" icon={SettingsIcon} />
    </>
);
