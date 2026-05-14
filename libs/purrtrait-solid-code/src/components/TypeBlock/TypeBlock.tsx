import { computeLayout, formatLayout } from '@purrtrait/code-layout';
import type { Component } from 'solid-js';

import { useCodeLayoutContext } from '../../providers';
import { CodeLayoutRenderer } from '../CodeLayoutRenderer';

import type { TypeBlockProps } from './types';

export const TypeBlock: Component<TypeBlockProps> = props => {
	const context = useCodeLayoutContext();

	const layout = () => computeLayout(context, props.lang, props.node);
	const lines = () => formatLayout(layout(), props.columns ?? context.columns);

	return (
		<pre>
			<CodeLayoutRenderer lines={lines()} />
		</pre>
	);
};
