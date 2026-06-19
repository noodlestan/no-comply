import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Divider, Flex, Scrollable, Surface } from '@no-comply/standard-ui';
import { type Component, Show, Suspense } from 'solid-js';

import { Markdown } from '../../../../../../../content';
import { useComponentExamples } from '../../../../../providers';
import { PlaygroundResetButton } from '../PlaygroundResetButton';

import styles from './PlaygroundExample.module.scss';
import { ComponentPlaygroundPreview } from './parts';

export const PlaygroundExample: Component = () => {
	const { currentExample, currentExampleParsed, currentExampleIndex, resetExampleOverrides } =
		useComponentExamples();

	const classList = staticClassList(styles, ['PlaygroundExample']);

	const title = () => currentExample()?.title;
	const description = () => currentExample()?.description;

	const handleResetExampleClick = () => resetExampleOverrides(currentExampleIndex() as number);

	// WIP conditionally show reset button

	return (
		<Surface variant="panel" classList={classList}>
			<Flex direction="column" stretch="height">
				<Suspense fallback={'LOADING...'}>
					<Show when={title()}>
						<Flex
							direction="row"
							justify="between"
							padding={['s', 'm']}
							classList={staticClassList(styles, ['-Header'])}
						>
							<Display level={4}>{title()}</Display>
							<PlaygroundResetButton label="Reset example" onPress={handleResetExampleClick} />
						</Flex>
					</Show>
					<Scrollable y>
						<Show when={description()}>
							<Flex padding="m" gap="m">
								<Markdown content={description() as string} />
								<Divider />
							</Flex>
						</Show>
						<Show when={currentExampleParsed()}>
							<Flex padding="m" gap="m">
								<ComponentPlaygroundPreview />
							</Flex>
						</Show>
					</Scrollable>
				</Suspense>
			</Flex>
		</Surface>
	);
};
