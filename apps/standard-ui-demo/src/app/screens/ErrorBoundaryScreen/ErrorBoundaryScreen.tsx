import { ErrorBoundary as HeadlessErrorBoundary } from '@no-comply/solid-composables';
import { type IconComponent } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Flex, Icon, Layout } from '@no-comply/standard-ui';
import BugIcon from 'lucide-solid/icons/bug';
import CloudRainIcon from 'lucide-solid/icons/cloud-rain';
import ServerCrashIcon from 'lucide-solid/icons/server-crash';
import SkullIcon from 'lucide-solid/icons/skull';
import XOctagon from 'lucide-solid/icons/x-octagon';
import { type ParentComponent, createSignal, onCleanup } from 'solid-js';

import styles from './ErrorBoundaryScreen.module.scss';

const logError = (error: Error) => {
	console.error(error);
};

const COLOR_NAMES = [
	'pink',
	'red',
	'yellow',
	'olive',
	'green',
	'ocean',
	'blue',
	'indigo',
	'violet',
];
const ICONS = [ServerCrashIcon, BugIcon, SkullIcon, CloudRainIcon, XOctagon];
const SPEED = 15;

export const ErrorScreen: ParentComponent = () => {
	const colorCount = COLOR_NAMES.length;
	let timeout: number = 0;
	let speed = SPEED;

	const [colorIndexes, setColorIndexes] = createSignal<[number, number, number]>([0, 0, 0]);
	const [icons, setIcons] = createSignal<[number, number, number]>([0, 0, 0]);

	const random = (length: number) => Math.floor(Math.random() * length);
	const blip = () => {
		speed += random(SPEED / 4);
		setColorIndexes([random(colorCount), random(colorCount), random(colorCount)]);
		setIcons([random(ICONS.length), random(ICONS.length), random(ICONS.length)]);
		timeout = setTimeout(blip, speed) as unknown as number;
	};
	blip();

	onCleanup(() => clearTimeout(timeout));

	const icon = (index: 0 | 1 | 2) => ICONS[icons()[index]] as IconComponent;
	const color = (index: 0 | 1 | 2) => COLOR_NAMES[colorIndexes()[index]];

	const classList = staticClassList(styles, 'ErrorScreen');
	const iconClassList = staticClassList(styles, '-Icon');

	return (
		<Flex direction="column" stretch="full" justify="stretch">
			<Layout tag="main" classList={classList}>
				<Flex padding="xl" gap="l" align="center">
					<Flex direction="row" gap="s" justify="around">
						<div style={{ '--error-icon-color-name': color(0) }}>
							<Icon icon={icon(0)} classList={iconClassList} />
						</div>
						<div style={{ '--error-icon-color-name': color(1) }}>
							<Icon icon={icon(1)} classList={iconClassList} />
						</div>
						<div style={{ '--error-icon-color-name': color(2) }}>
							<Icon icon={icon(2)} classList={iconClassList} />
						</div>
					</Flex>
					<Display variant="xl">Ouch</Display>
				</Flex>
			</Layout>
		</Flex>
	);
};

export const ErrorBoundaryScreen: ParentComponent = props => {
	return (
		<HeadlessErrorBoundary fallback={ErrorScreen} onError={logError}>
			{props.children}
		</HeadlessErrorBoundary>
	);
};
