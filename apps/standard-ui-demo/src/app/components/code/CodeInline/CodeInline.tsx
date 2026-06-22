import { staticClassList } from '@no-comply/solid-primitives';
import { type CodeBlockProps, CodeBlock as SolidCodeBlock } from '@purrtrait/solid-code';
import type { Component } from 'solid-js';

import styles from './CodeInline.module.scss';

export const CodeInline: Component<CodeBlockProps> = props => {
	return (
		<div style={{ margin: 0 }} classList={staticClassList(styles, 'CodeInline')}>
			<pre data-purrception-lang={props.lang}>
				<code>
					<SolidCodeBlock {...props} />
				</code>
			</pre>
		</div>
	);
};
