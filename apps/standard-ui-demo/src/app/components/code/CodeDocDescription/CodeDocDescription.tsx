/* eslint-disable dot-notation */
import { Flex, Link, Text } from '@no-comply/standard-ui';
import { type Component, For, type JSX, Show } from 'solid-js';

import { routeFor } from '../../../navigation';

import type { CodeDocDescriptionProps } from './types';

export const CodeDocDescription: Component<CodeDocDescriptionProps> = props => {
	const href = (link: string) => {
		const [type, name] = link.split(':');
		if (type === 'component') {
			return routeFor.component(name as string);
		}
		return routeFor.api(name as string);
	};

	const name = (link: string) => {
		const parts = link.split(':');
		return parts.pop() || '';
	};

	const links = () => {
		const link = props.node.tags?.['link'];
		if (link) {
			const items = typeof link === 'string' ? [link] : link;
			return items.map(item => ({ text: name(item), href: href(item) }));
		}
		return [];
	};

	const description = () => {
		const desc = props.node.description;
		if (!desc) {
			return [];
		}

		const parts: (string | JSX.Element)[] = [];
		let offset = 0;

		for (const match of desc.matchAll(/\{@link\s+([^}]+)\}/g)) {
			const [full, target] = match;
			const index = match.index ?? 0;

			parts.push(desc.slice(offset, index));

			parts.push(<Link href={href(target as string)}>{name(target as string)}</Link>);

			offset = index + full.length;
		}

		parts.push(desc.slice(offset));

		return parts;
	};

	return (
		<Flex direction="row" gap="l">
			<Show when={description()}>
				<Text>{description()}</Text>
			</Show>
			<Show when={links().length}>
				<For each={links()}>{link => <Link href={link.href}>{link.text}</Link>}</For>
			</Show>
		</Flex>
	);
};
