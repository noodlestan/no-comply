import { staticClassList } from '@no-comply/solid-primitives';
import { PurrceptionLanguageId } from '@purrtrait/lang-ts';
import { type Component } from 'solid-js';

import { CodeBlock } from '../CodeBlock';

import styles from './CodeInline.module.scss';

type Props = {
	lang: string;
	nodes: object[];
	context?: object;
	columns?: number;
};

export const CodeInline: Component<Props> = props => {
	return (
		<div style={{ margin: 0 }} classList={staticClassList(styles, 'CodeInline')}>
			<CodeBlock nodes={props.nodes} lang={PurrceptionLanguageId} context={props.context} />
		</div>
	);
};
