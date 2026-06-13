import {
	type ToggleActionIcons,
	type ToggleActionLabels,
	createSupportsQuery,
} from '@no-comply/solid-composables';
import { createIconValue } from '@no-comply/solid-contexts';
import { Callout, Flex, Link, ToggleButton } from '@no-comply/standard-ui';
import EyeIcon from 'lucide-solid/icons/eye';
import EyeOffIcon from 'lucide-solid/icons/eye-off';
import { type Component, For, Show, createSignal } from 'solid-js';

import { ShowPalette } from '../../../components';
import { ResourcesPage } from '../../../private';

const LABELS: ToggleActionLabels = {
	on: 'Palettes enabled',
	off: 'Palettes disabled (using computed colors)',
};

const ICONS: ToggleActionIcons = {
	on: createIconValue(EyeIcon),
	off: createIconValue(EyeOffIcon),
};

export const ColorPalettesPage: Component = () => {
	const [enablePalettes, setenablePalettes] = createSignal(true);

	const { isSupported } = createSupportsQuery({ query: 'color: --f-color(black, 100)' });

	const palettes = () => {
		return ['pink', 'red', 'yellow', 'olive', 'green', 'ocean', 'blue', 'indigo', 'violet'];
	};

	const handleSwitchModePress = () => setenablePalettes(v => !v);

	return (
		<ResourcesPage title="Palettes">
			<Flex direction="column" gap="m">
				<Flex direction="row" align="center" gap="s">
					<ToggleButton
						disabled={!isSupported()}
						value={enablePalettes() && isSupported()}
						onPress={handleSwitchModePress}
						labels={LABELS}
						icons={ICONS}
					/>
				</Flex>
				<Show when={!isSupported()}>
					<Callout variant="warning" title="Browser Support">
						Your browser does not support Custom CSS functions (
						<Link href="https://github.com/w3c/csswg-drafts/issues/9350">Proposal</Link>)
					</Callout>
				</Show>
			</Flex>
			<ShowPalette p="neutral" enablePalettes={enablePalettes()} />
			<Flex direction="column">
				<For each={palettes()}>
					{palette => <ShowPalette p={palette} enablePalettes={enablePalettes()} />}
				</For>
			</Flex>
		</ResourcesPage>
	);
};
