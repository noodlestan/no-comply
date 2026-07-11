import { VisuallyHidden } from '@no-comply/solid-composables';
import { type ContentSize } from '@no-comply/standard-ui';
import type { TagItem } from '@purrtrait/solid-code';
import { type Component, Show } from 'solid-js';

import { JSDocTagsList } from '../../../JSDocTagsList';

type Props = {
	size?: ContentSize;
	tags: TagItem[] | undefined;
};

export const CodeDocTags: Component<Props> = props => {
	return (
		<Show when={props.tags?.length}>
			<VisuallyHidden>
				<p>Tags</p>
			</VisuallyHidden>
			<JSDocTagsList tags={props.tags} />
		</Show>
	);
};
