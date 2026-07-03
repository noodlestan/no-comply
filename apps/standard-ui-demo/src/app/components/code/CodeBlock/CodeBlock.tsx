import { staticClassList } from '@no-comply/solid-primitives';
import { Mono } from '@no-comply/standard-ui';
import { CodeBlock as SolidCodeBlock } from '@purrtrait/solid-code';
import { type Component } from 'solid-js';

import { useRendering } from '../../../../providers';

import styles from './CodeBlock.module.scss';

type Props = {
	lang: string;
	nodes: object[];
	context?: object;
	columns?: number;
};

export const CodeBlock: Component<Props> = props => {
	const { renderCodeLayout, codeLinkComponent: codeLink } = useRendering();
	const options = {
		linkComponent: codeLink,
	};

	return (
		<div style={{ margin: 0 }} classList={staticClassList(styles, 'CodeBlock')}>
			<Mono>
				<pre data-purrception-lang={props.lang}>
					<code>
						<SolidCodeBlock
							lang={props.lang}
							nodes={props.nodes}
							linkerContext={props.context || {}}
							render={renderCodeLayout}
							options={options}
						/>
					</code>
				</pre>
			</Mono>
		</div>
	);
};
