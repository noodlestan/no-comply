import { VisuallyHidden } from '@no-comply/solid-composables';
import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Divider, Flex, Scrollable, Surface } from '@no-comply/standard-ui';
import type { TSXView } from '@purrtrait/view-tsx';
import {
	type Component,
	Match,
	Show,
	Suspense,
	Switch,
	createResource,
	createSignal,
} from 'solid-js';

import type { CompilerAPI } from '../../../../../../../../modules/TSXCompilerModule';
import { Markdown } from '../../../../../../../content';
import {
	$ID_PLAYGROUND_PREVIEW_DESCRIPTION,
	$ID_PLAYGROUND_PREVIEW_TITLE,
} from '../../../../../constants';
import { useComponentPlayground, useComponentPlaygroundProps } from '../../../../../providers';
import { PlaygroundResetButton } from '../PlaygroundResetButton';

import styles from './PlaygroundExample.module.scss';
import {
	ComponentPlaygroundHTML,
	ComponentPlaygroundPreview,
	PlayGroundPreviewOptions,
	PlaygroundExampleSelect,
} from './parts';

export const PlaygroundExample: Component = () => {
	const { currentExample, currentExampleParsed, currentExampleIndex } = useComponentPlayground();
	const { hasExampleOverrides, resetExampleOverrides } = useComponentPlaygroundProps();

	const [mode, setMode] = createSignal('preview');

	const { examplePropsOverrides: exampleOverrides } = useComponentPlaygroundProps();

	const [compiler] = createResource(async () => {
		const compilerModule = await import('../../../../../../../../modules/TSXCompilerModule');
		return compilerModule.createTSXCompilerModule().createCompiler();
	});

	const propOverrides = () => {
		const index = currentExampleIndex();

		if (index !== undefined) {
			return exampleOverrides(index);
		}
		throw new Error(`WIP = Read before ready`);
	};

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
					<Flex stretch="full" shrink>
						<Show when={currentExampleParsed()}>
							<PlayGroundPreviewOptions
								mode={mode()}
								setMode={setMode}
								classList={staticClassList(styles, ['-PlayGroundPreviewOptions'])}
							/>
						</Show>
						<Scrollable y>
							<Show when={description()}>
								<Flex id={$ID_PLAYGROUND_PREVIEW_DESCRIPTION} padding="m" gap="m">
									<Markdown content={description() as string} />
									<Divider />
								</Flex>
							</Show>
							<Show when={currentExampleParsed()}>
								<Flex
									role="region"
									aria-label="Rendered example"
									padding={['m', 'none', 'm', 'm']}
									gap="m"
								>
									<Switch>
										<Match when={mode() === 'source'}>SOURCE CODE</Match>
										<Match when={mode() === 'preview' && compiler()}>
											<ComponentPlaygroundPreview
												view={currentExampleParsed() as TSXView}
												compiler={compiler() as CompilerAPI}
												overrides={propOverrides()}
											/>
										</Match>
										<Match when={mode() === 'html'}>
											<ComponentPlaygroundHTML
												view={currentExampleParsed() as TSXView}
												compiler={compiler() as CompilerAPI}
												overrides={propOverrides()}
											/>
										</Match>
									</Switch>
								</Flex>
							</Show>
						</Scrollable>
					</Flex>
				</Flex>
			</Suspense>
		</Surface>
	);
};
