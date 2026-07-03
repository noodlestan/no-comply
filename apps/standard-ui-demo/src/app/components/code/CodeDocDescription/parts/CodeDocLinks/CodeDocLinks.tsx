import { type ContentSize, Flex, Link, Text } from '@no-comply/standard-ui';
import { type Component, For, Show } from 'solid-js';

import type { LinkItem } from '@purrtrait/solid-code/src/controllers/JsDoc/types';

type Props = {
	size?: ContentSize;
	links: LinkItem[];
};

export const CodeDocLinks: Component<Props> = props => {
	return (
		<Show when={props.links.length}>
			<p>Links</p>
			<Flex tag="ul" direction="row" gap="m" wrap>
				<For each={props.links}>
					{link => (
						<li>
							<Text size={props.size}>
								<Link href={link.href}>{link.text}</Link>
							</Text>
						</li>
					)}
				</For>
			</Flex>
		</Show>
	);
};
