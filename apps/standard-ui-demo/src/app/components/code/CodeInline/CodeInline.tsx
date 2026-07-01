import { staticClassList } from '@no-comply/solid-primitives';
import { Code } from '@no-comply/standard-ui';
import { type CodeBlockProps, CodeBlock as SolidCodeBlock } from '@purrtrait/solid-code';
import type { Component } from 'solid-js';

import styles from './CodeInline.module.scss';

export const CodeInline: Component<CodeBlockProps> = props => {
	return (
		<div style={{ margin: 0 }} classList={staticClassList(styles, 'CodeInline')}>
			<Code tag="div">
				<pre data-purrception-lang={props.lang}>
					<code>
						<SolidCodeBlock {...props} />
					</code>
				</pre>
			</Code>
		</div>
	);
};
