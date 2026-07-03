import { VisuallyHidden } from '@no-comply/solid-composables';
import { type ContentSize, Flex, Text } from '@no-comply/standard-ui';
import { type Component, For, Show } from 'solid-js';

import type { TagItem } from '@purrtrait/solid-code/src/controllers/JsDoc/types';

type Props = {
	size?: ContentSize;
	tags: TagItem[];
};

export const CodeDocTags: Component<Props> = props => {
	return (
		<Show when={props.tags.length}>
			<VisuallyHidden>
				<p>Tags</p>
			</VisuallyHidden>
			<Flex tag="ul" direction="row" gap="m" wrap>
				<For each={props.tags}>
					{([tag, valueOrValues]) => (
						<li>
							<Flex tag="ul" direction="row" gap="xs">
								<Text size={props.size}>
									{tag}: {valueOrValues}
								</Text>
							</Flex>
						</li>
					)}
				</For>
			</Flex>
		</Show>
	);
};
