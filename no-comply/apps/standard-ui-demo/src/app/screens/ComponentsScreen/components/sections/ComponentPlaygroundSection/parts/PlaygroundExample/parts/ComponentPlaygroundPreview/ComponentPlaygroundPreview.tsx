import type { TSXView } from '@purrtrait/view-tsx';
import { type Component } from 'solid-js';

import type { CompilerAPI } from '../../../../../../../../../../modules/TSXCompilerModule';
import { type ExamplePropsOverrides } from '../../../../../../../providers';
import { RenderExample } from '../../../../../../RenderExample';

type Props = {
	view: TSXView;
	compiler: CompilerAPI;
	overrides: ExamplePropsOverrides;
};

export const ComponentPlaygroundPreview: Component<Props> = props => {
	return (
		<RenderExample
			view={props.view as TSXView}
			overrides={props.overrides}
			compiler={props.compiler as CompilerAPI}
		/>
	);
};
