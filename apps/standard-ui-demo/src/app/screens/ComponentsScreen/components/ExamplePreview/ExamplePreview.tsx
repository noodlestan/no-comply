import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Surface } from '@no-comply/standard-ui';
import { type Component, type Resource, Show, Suspense } from 'solid-js';

import { type ParsedExampleAPI } from '../../providers';

import styles from './ExamplePreview.module.scss';
import { RenderExample } from './parts';

type Props = {
	example: Resource<ParsedExampleAPI>;
};

export const ExamplePreview: Component<Props> = props => {
	const classList = staticClassList(styles, ['ExamplePreview']);

	return (
		<Surface variant="panel" classList={classList}>
			<Flex direction="column" stretch="height">
				<Suspense fallback={'LOADING...'}>
					<Flex padding={['s', 'm']} classList={staticClassList(styles, ['-Header'])}>
						{props.example()?.data.name}
					</Flex>
					<Show when={props.example()?.parsed()}>
						<RenderExample parsed={props.example() as ParsedExampleAPI} />
					</Show>
				</Suspense>
			</Flex>
		</Surface>
	);
};
