import { createChainedResource, staticClassList } from '@no-comply/solid-primitives';
import { Display, Divider, Flex } from '@no-comply/standard-ui';
import type { TSXView } from '@purrtrait/view-tsx';
import { type Component, type Resource, Show, Suspense, createResource } from 'solid-js';

import type { CompilerAPI } from '../../../../../../../../modules/TSXCompilerModule';
import { Markdown } from '../../../../../../../content';
import { useComponentExamples } from '../../../../../providers';
import { RenderExample } from '../../../../RenderExample';

import styles from './ComponentMainPreview.module.scss';

type Props = {
	defaultTitle?: string;
};

type TitleProps = {
	title: Resource<string | undefined>;
};

export const Title: Component<TitleProps> = props => {
	const title = () => {
		const value = props.title();
		return value;
	};
	return <>zzzz{title()}zzz</>;
};

export const ComponentMainPreview: Component<Props> = props => {
	const { primaryExample, primaryExampleParsed } = useComponentExamples();

	const classList = staticClassList(styles, ['ComponentMainPreview']);

	const [compiler] = createResource(async () => {
		const compilerModule = await import('../../../../../../../../modules/TSXCompilerModule');
		return compilerModule.createTSXCompilerModule().createCompiler();
	});

	const [title] = createChainedResource(primaryExample, e => e.title || props.defaultTitle, {
		name: 'title',
	});
	const [description] = createChainedResource(primaryExample, e => e.description, {
		name: 'description',
	});

	return (
		<Flex direction="column" stretch="height" gap="m" classList={classList}>
			<Flex classList={staticClassList(styles, ['-Header'])}>
				<Display level={3} variant="m">
					<Suspense fallback={'...'}>{title()}</Suspense>
				</Display>
			</Flex>
			<Suspense fallback={'LOADING 2...'}>
				<Show when={description()}>
					<Flex direction="column" gap="s">
						<Markdown content={description() as string} />
					</Flex>
				</Show>
			</Suspense>
			<Divider />
			<Suspense fallback={'LOADING...'}>
				<Show when={primaryExampleParsed() && compiler()}>
					<RenderExample
						parsed={primaryExampleParsed() as TSXView}
						compiler={compiler() as CompilerAPI}
					/>
				</Show>
			</Suspense>
		</Flex>
	);
};
