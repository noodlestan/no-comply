import { type ContentSize, Flex } from '@no-comply/standard-ui';
import type { JsDocData } from '@purrception/lang-ts';
import { type Component, type JSX, Show, children } from 'solid-js';

import { useRendering } from '../../../../providers';

import { CodeDocBody, CodeDocLinks, CodeDocTags } from './parts';

type Props = {
	node: JsDocData;
	title?: JSX.Element;
	size?: ContentSize;
	children?: JSX.Element;
};

export const CodeDocDescription: Component<Props> = props => {
	const { renderJsDocDescription, getJsDocLinks, getJsDocTags } = useRendering();

	const description = () => renderJsDocDescription(props.node);
	const links = () => getJsDocLinks(props.node);
	const tags = () => getJsDocTags(props.node);

	const c = children(() => props.children);

	const show = () => description() || links().length || tags().length;

	return (
		<>
			<Show when={show()}>
				<Flex direction="column" gap="s">
					<Show when={props.title}>{props.title}</Show>
					<CodeDocTags size={props.size} tags={tags()} />
					{props.children}
					<CodeDocBody size={props.size} description={description()} />
					<CodeDocLinks size={props.size} links={links()} />
				</Flex>
			</Show>
			<Show when={!show()}>{c()}</Show>
		</>
	);
};
