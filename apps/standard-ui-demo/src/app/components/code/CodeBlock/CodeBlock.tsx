import { staticClassList } from '@no-comply/solid-primitives';
import { type Component } from 'solid-js';

import { useRendering } from '../../../../providers';
import { CodeRenderer } from '../CodeRenderer';

import styles from './CodeBlock.module.scss';

type Props = {
	lang: string;
	nodes: object[];
	context?: object;
	columns?: number;
};

export const CodeBlock: Component<Props> = props => {
	const { serializeCode } = useRendering();

	const serialized = () => serializeCode(props.lang, props.nodes, props.context || {});

	return (
		<div style={{ margin: 0 }} classList={staticClassList(styles, 'CodeBlock')}>
			<CodeRenderer code={serialized().code} lang={'javascript'} />
		</div>
	);
};
