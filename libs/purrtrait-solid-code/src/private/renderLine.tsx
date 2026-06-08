import type { CodeLayoutLine, CodeLayoutToken } from '@purrtrait/code-layout';
import { For, type JSX } from 'solid-js';

import type { SolidCodeLayoutContextValue } from '../contexts';

function renderToken(ctx: SolidCodeLayoutContextValue, token: CodeLayoutToken): JSX.Element {
	return (
		<span class={`token ${token.kind}`}>{token.link ? ctx.link({ token }) : token.value}</span>
	);
}

export function renderLine(ctx: SolidCodeLayoutContextValue, line: CodeLayoutLine): JSX.Element {
	return (
		<div class="code-line">
			<span class="indent">{' '.repeat(line.indent * 2)}</span>
			<For each={line.content}>{token => renderToken(ctx, token)}</For>
		</div>
	);
}
