import type {
	CodeLayoutContextValue,
	CodeLayoutLine,
	CodeLayoutToken,
} from '@purrtrait/code-layout';
import { For, type JSX } from 'solid-js';

function renderToken(ctx: CodeLayoutContextValue, token: CodeLayoutToken): JSX.Element {
	if (token.kind === 'type-ref') {
		const target = ctx.linker(token.value);

		if (target) {
			return (
				<a href={target} class={`token ${token.kind}`}>
					{token.link ? <a href={token.link}>{token.value}</a> : token.value}
				</a>
			);
		}
	}

	return (
		<span class={`token ${token.kind}`}>
			{token.link ? <a href={token.link}>{token.value}</a> : token.value}
		</span>
	);
}

export function renderLine(ctx: CodeLayoutContextValue, line: CodeLayoutLine): JSX.Element {
	return (
		<div class="code-line">
			<span class="indent">{' '.repeat(line.indent * 2)}</span>
			<For each={line.content}>{token => renderToken(ctx, token)}</For>
		</div>
	);
}
