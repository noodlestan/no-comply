import type { CodeLayoutLine, CodeLayoutToken } from '@purrtrait/code-layout';
import { type JSX } from 'solid-js';

function renderToken(token: CodeLayoutToken): JSX.Element {
	return (
		<span class={`token ${token.kind}`}>
			{token.link ? <a href={token.link}>{token.value}</a> : token.value}
		</span>
	);
}

export function renderLine(line: CodeLayoutLine): JSX.Element {
	return (
		<div class="code-line">
			<span class="indent">{' '.repeat(line.indent * 2)}</span>
			{line.content.map(renderToken)}
		</div>
	);
}
