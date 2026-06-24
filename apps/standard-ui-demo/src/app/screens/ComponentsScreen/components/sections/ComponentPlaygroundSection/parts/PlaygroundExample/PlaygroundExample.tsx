import { VisuallyHidden } from '@no-comply/solid-composables';
import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Divider, Flex, Scrollable, Surface } from '@no-comply/standard-ui';
import { type Component, Show, Suspense } from 'solid-js';

import { Markdown } from '../../../../../../../content';
import {
	$ID_PLAYGROUND_PREVIEW_DESCRIPTION,
	$ID_PLAYGROUND_PREVIEW_TITLE,
} from '../../../../../constants';
import { useComponentPlayground, useComponentPlaygroundProps } from '../../../../../providers';
import { PlaygroundResetButton } from '../PlaygroundResetButton';

import styles from './PlaygroundExample.module.scss';
import {
	ComponentPlaygroundPreview,
	PlayGroundExampleModeChoice,
	PlaygroundExampleSelect,
} from './parts';

export const PlaygroundExample: Component = () => {
	const { currentExample, currentExampleParsed, currentExampleIndex } = useComponentPlayground();
	const { hasExampleOverrides, resetExampleOverrides } = useComponentPlaygroundProps();

	const classList = staticClassList(styles, ['PlaygroundExample']);

	const title = () => currentExample()?.title;
	const description = () => currentExample()?.description;

	const handleResetExampleClick = () => resetExampleOverrides(currentExampleIndex() as number);

	return (
		<Surface
			tag="section"
			aria-labelledby={$ID_PLAYGROUND_PREVIEW_TITLE}
			aria-describedby={description() ? $ID_PLAYGROUND_PREVIEW_DESCRIPTION : undefined}
			variant="panel"
			classList={classList}
		>
			<Suspense fallback={'LOADING......'}>
				<Flex tag="section" direction="column" stretch="height" gap="l">
					<Show when={title()}>
						<VisuallyHidden>
							<Display id={$ID_PLAYGROUND_PREVIEW_TITLE} level={4}>
								Rendered example: {title()}
							</Display>
						</VisuallyHidden>
						<Flex
							direction="row"
							justify="between"
							align="end"
							gap="m"
							padding={['s', 'm']}
							wrap
							classList={staticClassList(styles, ['-Header'])}
						>
							<PlaygroundExampleSelect />
							<Show when={hasExampleOverrides(currentExampleIndex() as number)}>
								<PlaygroundResetButton label="Reset example" onPress={handleResetExampleClick} />
							</Show>
						</Flex>
					</Show>
					<Scrollable y>
						<Show when={description()}>
							<Flex id={$ID_PLAYGROUND_PREVIEW_DESCRIPTION} padding="m" gap="m">
								<Markdown content={description() as string} />
								<Divider />
							</Flex>
						</Show>
						<Show when={currentExampleParsed()}>
							<PlayGroundExampleModeChoice />
							<Flex role="region" aria-label="Rendered example" padding="m" gap="m">
								<ComponentPlaygroundPreview />
							</Flex>
						</Show>
					</Scrollable>
				</Flex>
			</Suspense>
		</Surface>
	);
};
