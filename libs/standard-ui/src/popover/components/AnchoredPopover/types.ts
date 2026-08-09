import type {
	AnchoredPopoverMixinAPI,
	AnchoredPopoverAPI as HeadlessAnchoredPopoverAPI,
	AnchoredPopoverProps as HeadlessAnchoredPopoverProps,
} from '@no-comply/solid-composables';
import type { RenderProp } from '@no-comply/solid-primitives';

export type AnchoredPopoverProps = HeadlessAnchoredPopoverProps & {
	trigger: RenderProp<AnchoredPopoverAPI['$trigger']>;
	children: RenderProp<AnchoredPopoverAPI['$content']>;
};

export type AnchoredPopoverAPI = Omit<HeadlessAnchoredPopoverAPI, '$root'> & {
	$root: AnchoredPopoverMixinAPI['$root'] & HeadlessAnchoredPopoverAPI['$root'];
};
