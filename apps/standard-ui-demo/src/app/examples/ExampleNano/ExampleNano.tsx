import { Display, Icon } from '@no-comply/standard-ui';
import { ClockIcon, SettingsIcon } from 'lucide-solid';
import { type Component, Show } from 'solid-js';

type Props = { title?: string };

export const ExampleNano: Component<Props> = props => (
    <>
        <Show when={props.title}>
            <Display variant="s">{props.title}</Display>
        </Show>
        <Icon size="small" icon={ClockIcon} />
        <Icon size="small" icon={SettingsIcon} />
    </>
);
