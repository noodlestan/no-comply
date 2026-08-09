import { VisuallyHidden } from '@no-comply/solid-composables';
import { staticClassList } from '@no-comply/solid-primitives';
import { Flex } from '@no-comply/standard-ui';
import type { TSXView } from '@purrtrait/view-tsx';
import { type Component, Suspense, createSignal } from 'solid-js';

import type { CompilerAPI } from '../../../../../../../../../../modules/TSXCompilerModule';
import { CodeRenderer } from '../../../../../../../../../../modules/code/components';
import { cleanupRenderedHtml } from '../../../../../../../../../helpers';
import { type ExamplePropsOverrides } from '../../../../../../../providers';
import { RenderExample } from '../../../../../../RenderExample';

import styles from './ComponentPlaygroundHTML.module.scss';

type Props = {
	view: TSXView;
	compiler: CompilerAPI;
	overrides: ExamplePropsOverrides;
};

export const ComponentPlaygroundHTML: Component<Props> = props => {
	const [code, setCode] = createSignal<string>();

	const cleanedCode = () => cleanupRenderedHtml(code() || '');

	return (
		<Suspense fallback="Loading...">
			<Flex stretch="full" classList={staticClassList(styles, 'ComponentPlaygroundHTML')}>
				<VisuallyHidden>
					<RenderExample
						view={props.view}
						overrides={props.overrides}
						compiler={props.compiler}
						onContentsChanged={setCode}
					/>
				</VisuallyHidden>
				<CodeRenderer code={cleanedCode()} lang="html" />
			</Flex>
		</Suspense>
	);
};
