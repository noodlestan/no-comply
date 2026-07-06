import { createClassList } from '@no-comply/solid-primitives';
import { AnchoredPopover, Flex } from '@no-comply/standard-ui';
import { type Component, createSignal, onMount } from 'solid-js';

import { ColorPopover } from '../ColorPopover';

import styles from './ShowColor.module.scss';

type Props = {
	p: string;
	l: number;
	enablePalettes?: boolean;
};

export const ShowColor: Component<Props> = props => {
	let element: HTMLElement;

	const [color, setColor] = createSignal('');

	const setElementRef = (el: HTMLElement) => {
		element = el;
	};

	onMount(() => {
		if (props.p !== 'labels') {
			setColor(getComputedStyle(element).backgroundColor);
		} else {
			setColor(String(props.l));
		}
	});

	const label = () => `Show details for ${props.p} ${props.l}`;

	const classList = createClassList(styles, () => ({
		ShowColor: true,
		'palettes-enabled': Boolean(props.enablePalettes),
	}));

	const style = () => ({
		'--__show-color-palette': `var(--p-${props.p})`,
		'--__show-color-color': `var(--p-${props.p}-center)`,
		'--__show-color-level': props.l,
		'--__show-color-light': `var(--l-${props.l})`,
	});

	return (
		<Flex classList={classList()} style={style()} ref={setElementRef}>
			<AnchoredPopover
				anchor="start-center"
				direction="block"
				flip="inline"
				trigger={trigger => (
					<button aria-label={label()} {...trigger}>
						{props.l}
					</button>
				)}
			>
				{popover => <ColorPopover id={popover.id} color={color()} />}
			</AnchoredPopover>
		</Flex>
	);
};
