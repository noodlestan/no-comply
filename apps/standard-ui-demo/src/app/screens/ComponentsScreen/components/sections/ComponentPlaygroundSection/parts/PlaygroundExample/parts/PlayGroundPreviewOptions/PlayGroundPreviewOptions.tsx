import { VisuallyHidden } from '@no-comply/solid-composables';
import { type ClassList, shortId } from '@no-comply/solid-primitives';
import { Flex, Label, SegmentedButton, SegmentedButtonItem } from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

type Props = {
	classList: ClassList;
};

export const PlayGroundPreviewOptions: Component<Props> = props => {
	const labelId = shortId();

	const [value, setValue] = createSignal('preview');

	return (
		<Flex
			direction="row"
			justify="end"
			gap="s"
			padding="xs"
			role="toolbar"
			aria-label="Preview options"
			{...props}
		>
			<VisuallyHidden>
				<Label id={labelId} variant="small">
					Select preview mode
				</Label>
			</VisuallyHidden>
			<SegmentedButton
				size="small"
				name="example-mode-choice"
				aria-labelledby={labelId}
				value={value()}
				onValueChange={setValue}
			>
				<SegmentedButtonItem value="source">Source</SegmentedButtonItem>
				<SegmentedButtonItem value="preview">Preview</SegmentedButtonItem>
				<SegmentedButtonItem value="html">Html</SegmentedButtonItem>
			</SegmentedButton>
		</Flex>
	);
};
