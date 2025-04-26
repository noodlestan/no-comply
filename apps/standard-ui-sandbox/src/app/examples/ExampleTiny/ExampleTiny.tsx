import { Display, Icon, IconButton } from '@noodlestan/standard-ui';
import { ClockIcon, SettingsIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

type ExampleSmallProps = { title?: string };

export const ExampleTiny: Component<ExampleSmallProps> = props => (
    <>
        <Icon size="small" icon={ClockIcon} />
        <Display level={4}>{props.title ?? 'Lorem ipsum'}</Display>
        <IconButton size="small" variant="primary" icon={SettingsIcon} label="Open settings" />
    </>
);
