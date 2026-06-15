import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Surface } from '@no-comply/standard-ui';
import { type Component, Show, Suspense } from 'solid-js';

import styles from './ExamplePreview.module.scss';
import { createParseExample } from './parser';
import { RenderExample } from './parts';
import type { ExampleData } from './types';

export const ExamplePreview: Component = () => {
	const example = (): ExampleData => ({
		name: 'Basic Usage',
		description: 'Some description',
		tsx: `<h1>Demo</h1><Flex padding="l"><Button target intent="negative" onClick={() => console.log("!")}><Display>foo</Display></Button></Flex>`,
	});

	const parsed = createParseExample(example);

	const classList = staticClassList(styles, ['ExamplePreview']);

	return (
		<Surface variant="panel" classList={classList}>
			<Flex direction="column" stretch="height">
				<Flex padding={['s', 'm']} classList={staticClassList(styles, ['-Header'])}>
					{example().name}
				</Flex>
				<Suspense fallback={'COMPILING...'}>
					<Show when={parsed.parsed()}>
						<RenderExample parsed={parsed} />
					</Show>
				</Suspense>
			</Flex>
		</Surface>
	);
};
