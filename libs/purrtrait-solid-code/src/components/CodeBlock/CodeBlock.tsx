import { computeLayout, formatLayout } from '@purrtrait/code-layout';
import type { Component } from 'solid-js';

import { useSolidCodeLayoutContext } from '../../providers';
import { CodeLayoutRenderer } from '../CodeLayoutRenderer';

import type { CodeBlockProps } from './types';

export const CodeBlock: Component<CodeBlockProps> = props => {
	const context = useSolidCodeLayoutContext();

	const layoutContext = () => ({ ...context, context: props.context });

	const lines = () => {
		return props.nodes
			.map(node => {
				const layoutNodes = computeLayout(layoutContext(), props.lang, node);
				return formatLayout(layoutNodes, props.columns ?? context.columns);
			})
			.flat();
	};

	return (
		<pre style={{ margin: 0 }}>
			<CodeLayoutRenderer lines={lines()} />
		</pre>
	);
};
