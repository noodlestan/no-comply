import { VisuallyHidden } from '@no-comply/solid-composables';
import { shortId } from '@no-comply/solid-primitives';
import { Flex, Label, SegmentedButton, SegmentedButtonItem } from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

export const PlayGroundExampleModeChoice: Component = () => {
	const labelId = shortId();

	const [value, setValue] = createSignal('preview');

	return (
		<Flex direction="column" align="start" gap="xs" role="toolbar">
			<VisuallyHidden>
				<Label id={labelId} variant="small">
					Select preview mode
				</Label>
			</VisuallyHidden>
			<SegmentedButton
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
