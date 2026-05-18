import { Flex, IconButton, type IconButtonProps } from '@no-comply/standard-ui';
import BikeIcon from 'lucide-solid/icons/bike';
import CarIcon from 'lucide-solid/icons/car';
import CatIcon from 'lucide-solid/icons/cat';
import DogIcon from 'lucide-solid/icons/dog';
import HomeIcon from 'lucide-solid/icons/home';
import { Show } from 'solid-js';
import type { JSX, ParentComponent } from 'solid-js';

type Props = {
	home?: IconButtonProps['size'];
	items?: IconButtonProps['size'];
};

export const VerticalDividerExample: ParentComponent<Props> = (props): JSX.Element => (
	<Flex direction="row" gap="m" align="center">
		<Show when={props.home}>
			<IconButton icon={HomeIcon} label="Cat" size={props.home} />
		</Show>
		<IconButton icon={CatIcon} label="Cat" size={props.items} />
		<IconButton icon={DogIcon} label="Dog" size={props.items} />
		{props.children}
		<IconButton icon={BikeIcon} label="BikeIcon" size={props.items} />
		<IconButton icon={CarIcon} label="Car" size={props.items} />
	</Flex>
);
