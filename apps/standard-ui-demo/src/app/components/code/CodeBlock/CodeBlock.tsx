import { staticClassList } from '@no-comply/solid-primitives';
import { Mono } from '@no-comply/standard-ui';
import { type CodeBlockProps, CodeBlock as SolidCodeBlock } from '@purrtrait/solid-code';
import type { Component } from 'solid-js';

import styles from './CodeBlock.module.scss';

export const CodeBlock: Component<CodeBlockProps> = props => {
	return (
		<div style={{ margin: 0 }} classList={staticClassList(styles, 'CodeBlock')}>
			<Mono>
				<pre data-purrception-lang={props.lang}>
					<code>
						<SolidCodeBlock {...props} />
					</code>
				</pre>
			</Mono>
		</div>
	);
};
