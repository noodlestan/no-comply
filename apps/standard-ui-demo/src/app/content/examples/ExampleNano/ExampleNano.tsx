import { Display, Icon } from '@no-comply/standard-ui';
import ClockIcon from 'lucide-solid/icons/clock';
import SettingsIcon from 'lucide-solid/icons/settings';
import { type Component, Show } from 'solid-js';

type Props = { title?: string };

export const ExampleNano: Component<Props> = props => (
	<>
		<Show when={props.title}>
			<Display>{props.title}</Display>
		</Show>
		<Icon size="small" icon={ClockIcon} />
		<Icon size="small" icon={SettingsIcon} />
	</>
);
