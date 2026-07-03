import { type ContentSize, Flex } from '@no-comply/standard-ui';
import type { JsDocData } from '@purrception/lang-ts';
import { createJsDocDescription } from '@purrtrait/solid-code';
import { type Component, type JSX, Show } from 'solid-js';

import { useMeta } from '../../../../providers';

import { CodeDocBody, CodeDocLinks, CodeDocTags } from './parts';

type Props = {
	node: JsDocData;
	title?: JSX.Element;
	size?: ContentSize;
};

export const CodeDocDescription: Component<Props> = props => {
	const { resolveLink } = useMeta();
	const { links, tags, description } = createJsDocDescription(() => props.node, {
		resolveLink,
	});

	return (
		<Show when={description() || links().length || tags().length}>
			<Flex direction="column" gap="s">
				<Show when={props.title}>{props.title}</Show>
				<CodeDocTags size={props.size} tags={tags()} />
				<CodeDocBody size={props.size} description={description()} />
				<CodeDocLinks size={props.size} links={links()} />
			</Flex>
		</Show>
	);
};
