import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Divider, Flex } from '@no-comply/standard-ui';
import { type Component, type Resource, Show, Suspense } from 'solid-js';

import { Markdown } from '../../../../content';
import { type ParsedExampleAPI } from '../../providers';
import { RenderExample } from '../RenderExample';

import styles from './ComponentMainPreview.module.scss';

type Props = {
	example: Resource<ParsedExampleAPI>;
	defaultTitle?: string;
};

export const ComponentMainPreview: Component<Props> = props => {
	const classList = staticClassList(styles, ['ComponentMainPreview']);

	const parsed = () => props.example()?.parsed();

	const title = () => props.example()?.data.title || props.defaultTitle;

	const description = () => props.example()?.data.description;

	return (
		<Flex direction="column" stretch="height" gap="s" classList={classList}>
			<Suspense fallback={'LOADING...'}>
				<Show when={title()}>
					<Flex classList={staticClassList(styles, ['-Header'])}>
						<Display level={3} variant="m">
							{' '}
							{title()}
						</Display>
					</Flex>
				</Show>
				<Show when={description()}>
					<Flex direction="column" gap="s">
						<Markdown content={description() as string} />
						<Divider />
					</Flex>
				</Show>
				<Show when={parsed()}>
					<RenderExample example={props.example() as ParsedExampleAPI} />
				</Show>
			</Suspense>
		</Flex>
	);
};
