import type {
    AnchoredPopoverBaseProps,
    AnchoredPopoverMixinAPI,
    AnchoredPopoverAPI as HeadlessAnchoredPopoverAPI,
    AnchoredPopoverProps as HeadlessAnchoredPopoverProps,
} from '@noodlestan/headless-ui';

export type AnchoredPopoverProps = AnchoredPopoverBaseProps & HeadlessAnchoredPopoverProps;

export type AnchoredPopoverAPI = Omit<HeadlessAnchoredPopoverAPI, '$root'> & {
    $root: AnchoredPopoverMixinAPI['$root'] & HeadlessAnchoredPopoverAPI['$root'];
};
