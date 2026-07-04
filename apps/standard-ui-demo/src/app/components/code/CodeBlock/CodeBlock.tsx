import { createClassList } from '@no-comply/solid-primitives';
import type { ContentSize } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { useRendering } from '../../../../providers';
import { CodeRenderer } from '../CodeRenderer';

import styles from './CodeBlock.module.scss';

type Props = {
	lang: string;
	nodes: object[];
	context?: object;
	columns?: number;
	size?: ContentSize;
	padding?: boolean;
	inline?: boolean;
};

export const CodeBlock: Component<Props> = props => {
	const { serializeCode } = useRendering();

	const serialized = () => serializeCode(props.lang, props.nodes, props.context || {});

	const classList = createClassList(styles, () => ({
		CodeBlock: true,
		padding: Boolean(props.padding),
		inline: Boolean(props.inline),
	}));

	return (
		<div style={{ margin: 0 }} classList={classList()}>
			<CodeRenderer size={props.size} code={serialized().code} lang={'javascript'} />
		</div>
	);
};
