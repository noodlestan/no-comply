import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Divider, Flex } from '@no-comply/standard-ui';
import { type Component, type Resource, Show, Suspense, createResource } from 'solid-js';

import type { CompilerAPI } from '../../../../../modules/TSXCompilerModule';
import { Markdown } from '../../../../content';
import { type ParsedExampleAPI, type ReadyExampleAPI } from '../../providers';
import { RenderExample } from '../RenderExample';

import styles from './ComponentMainPreview.module.scss';

type Props = {
	example: Resource<ParsedExampleAPI>;
	defaultTitle?: string;
};

export const ComponentMainPreview: Component<Props> = props => {
	const classList = staticClassList(styles, ['ComponentMainPreview']);

	const [compiler] = createResource(async () => {
		const compilerModule = await import('../../../../../modules/TSXCompilerModule');
		return compilerModule.createTSXCompilerModule().createCompiler();
	});

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
				<Show when={parsed() && compiler()}>
					<RenderExample
						example={props.example() as ReadyExampleAPI}
						compiler={compiler() as CompilerAPI}
					/>
				</Show>
			</Suspense>
		</Flex>
	);
};
