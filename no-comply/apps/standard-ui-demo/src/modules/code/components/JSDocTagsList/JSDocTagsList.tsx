import { Flex } from '@no-comply/standard-ui';
import type { TagItem } from '@purrtrait/solid-code';
import { For, Show } from 'solid-js';
import type { Component } from 'solid-js';

import { JSDocTag } from './parts';

type Props = {
	tags: TagItem[] | undefined;
};

export const JSDocTagsList: Component<Props> = props => {
	return (
		<Show when={props.tags?.length}>
			<Flex tag="ul" direction="row" gap="s" wrap>
				<Flex direction="row" gap="s">
					<For each={props.tags}>{([key, value]) => <JSDocTag key={key} value={value} />}</For>
				</Flex>
			</Flex>
		</Show>
	);
};
