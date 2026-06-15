import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Divider, Flex, Scrollable, Surface } from '@no-comply/standard-ui';
import { type Component, Show, Suspense } from 'solid-js';

import { Markdown } from '../../../../content';
import { type ParsedExampleAPI, useComponentExamples } from '../../providers';
import { RenderExample } from '../RenderExample';

import styles from './ComponentPlaygroundPreview.module.scss';

export const ComponentPlaygroundPreview: Component = () => {
	const { currentExample } = useComponentExamples();

	const classList = staticClassList(styles, ['ComponentPlaygroundPreview']);

	const parsed = () => currentExample()?.parsed();

	const title = () => currentExample()?.data.title;

	const description = () => currentExample()?.data.description;

	return (
		<Surface variant="panel" classList={classList}>
			<Flex direction="column" stretch="height">
				<Suspense fallback={'LOADING...'}>
					<Show when={title()}>
						<Flex padding={['s', 'm']} classList={staticClassList(styles, ['-Header'])}>
							<Display level={4}> {title()}</Display>
						</Flex>
					</Show>
					<Scrollable y>
						<Show when={description()}>
							<Flex padding="m" gap="m">
								<Markdown content={description() as string} />
								<Divider />
							</Flex>
						</Show>
						<Show when={parsed()}>
							<RenderExample example={currentExample() as ParsedExampleAPI} />
						</Show>
					</Scrollable>
				</Suspense>
			</Flex>
		</Surface>
	);
};
