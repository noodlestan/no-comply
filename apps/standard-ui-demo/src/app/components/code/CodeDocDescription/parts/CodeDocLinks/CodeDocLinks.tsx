import { type ContentSize, Flex, Link, Text } from '@no-comply/standard-ui';
import type { JsDocLinkItem } from '@purrtrait/solid-code';
import { type Component, For, Show } from 'solid-js';

type Props = {
	size?: ContentSize;
	links: JsDocLinkItem[];
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
