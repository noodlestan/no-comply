import { type Component, For } from 'solid-js';

import { renderLine } from '../../private';
import { useCodeLayoutContext } from '../../providers';

import type { CodeLayoutRendererProps } from './types';

export const CodeLayoutRenderer: Component<CodeLayoutRendererProps> = (
	props: CodeLayoutRendererProps,
) => {
	const context = useCodeLayoutContext();

	return <For each={props.lines}>{line => renderLine(context, line)}</For>;
};
