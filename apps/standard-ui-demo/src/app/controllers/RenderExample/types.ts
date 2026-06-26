import type { TSXView } from '@purrtrait/view-tsx';
import { type Accessor, type JSX } from 'solid-js';

import type { CompilerAPI, CompilerScope } from '../../../modules/TSXCompilerModule';
import type { ExamplePropsOverrides } from '../../screens';

export type RenderExampleProps = {
	compiler: CompilerAPI;
	view: TSXView;
	overrides?: ExamplePropsOverrides;
	controls?: () => JSX.Element;
};

export type RenderExampleAPI = {
	source: Accessor<string>;
	wrapperProps: Accessor<Record<string, unknown>>;
	scope: Accessor<CompilerScope>;
};
