import type {
    PopoverAPI as HeadlessPopoverAPI,
    PopoverProps as HeadlessPopoverProps,
    PopoverMixinAPI,
} from '@no-comply/solid-composables';

export type PopoverProps = HeadlessPopoverProps;

export type PopoverAPI = Omit<HeadlessPopoverAPI, '$root'> & {
    $root: PopoverMixinAPI['$root'] & HeadlessPopoverAPI['$root'];
};
