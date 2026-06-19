import type { TSXView } from '@purrtrait/view-tsx';
import { type Component, Show, Suspense, createResource } from 'solid-js';

import type { CompilerAPI } from '../../../../../../../../../../modules/TSXCompilerModule';
import { useComponentExamples } from '../../../../../../../providers';
import { RenderExample } from '../../../../../../RenderExample';

export const ComponentPlaygroundPreview: Component = () => {
	const {
		currentExampleParsed,
		currentExampleIndex,
		examplePropsOverrides: exampleOverrides,
	} = useComponentExamples();

	const [compiler] = createResource(async () => {
		const compilerModule = await import('../../../../../../../../../../modules/TSXCompilerModule');
		return compilerModule.createTSXCompilerModule().createCompiler();
	});

	const propOverrides = () => {
		const index = currentExampleIndex();

		if (index !== undefined) {
			return exampleOverrides(index);
		}
		throw new Error(`WIP = Read before ready`);
	};

	return (
		<Suspense fallback={'LOADING...'}>
			<Show when={currentExampleParsed() && compiler()}>
				<RenderExample
					parsed={currentExampleParsed() as TSXView}
					overrides={propOverrides()}
					compiler={compiler() as CompilerAPI}
				/>
			</Show>
		</Suspense>
	);
};
