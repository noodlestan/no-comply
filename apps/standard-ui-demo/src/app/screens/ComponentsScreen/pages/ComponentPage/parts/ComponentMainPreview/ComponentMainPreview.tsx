import { createChainedResource, staticClassList } from '@no-comply/solid-primitives';
import { Display, Divider, Flex, Link } from '@no-comply/standard-ui';
import type { TSXView } from '@purrtrait/view-tsx';
import { type Component, type Resource, Show, Suspense, createResource } from 'solid-js';

import type { CompilerAPI } from '../../../../../../../modules/TSXCompilerModule';
import { Markdown } from '../../../../../../content';
import { routeFor } from '../../../../../../navigation';
import { RenderExample } from '../../../../components';
import {
	type ComponentExampleData,
	ComponentPlaygroundPropsProvider,
	ComponentPlaygroundProvider,
	parseExample,
	useComponentExamples,
} from '../../../../providers';

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

// WIP loading spinners and text placeholders

export const ComponentMainPreview: Component<Props> = props => {
	const { component, exampleList } = useComponentExamples();

	const classList = staticClassList(styles, ['ComponentMainPreview']);

	const [currentExample] = createChainedResource(exampleList, list => {
		if (!list.length) {
			throw new Error(`No examples found`);
		}
		return list[0] as ComponentExampleData;
	});

	const [currentExampleParsed] = createChainedResource(currentExample, example =>
		parseExample(example),
	);

	const [compiler] = createResource(async () => {
		const compilerModule = await import('../../../../../../../modules/TSXCompilerModule');
		return compilerModule.createTSXCompilerModule().createCompiler();
	});

	const [title] = createChainedResource(currentExample, e => e.title || props.defaultTitle, {
		name: 'title',
	});
	const [description] = createChainedResource(currentExample, e => e.description, {
		name: 'description',
	});

	return (
		<ComponentPlaygroundProvider examples={exampleList}>
			<ComponentPlaygroundPropsProvider component={component()}>
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
					<Divider length="full" />
					<Suspense fallback={'LOADING...'}>
						<Show when={currentExampleParsed() && compiler()}>
							<RenderExample
								controls={() => (
									<Link href={routeFor.playground(component().name)}>Open in playground</Link>
								)}
								view={currentExampleParsed() as TSXView}
								compiler={compiler() as CompilerAPI}
							/>
						</Show>
					</Suspense>
				</Flex>
			</ComponentPlaygroundPropsProvider>
		</ComponentPlaygroundProvider>
	);
};
