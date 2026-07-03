import { type ContentSize, Flex } from '@no-comply/standard-ui';
import type { JsDocData } from '@purrception/lang-ts';
import { type Component, type JSX, Show } from 'solid-js';

import { useRendering } from '../../../../providers';

import { CodeDocBody, CodeDocLinks, CodeDocTags } from './parts';

type Props = {
	node: JsDocData;
	title?: JSX.Element;
	size?: ContentSize;
};

export const CodeDocDescription: Component<Props> = props => {
	const { renderJsDocDescription, getJsDocLinks, getJsDocTags } = useRendering();

	const description = () => renderJsDocDescription(props.node);
	const links = () => getJsDocLinks(props.node);
	const tags = () => getJsDocTags(props.node);

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
