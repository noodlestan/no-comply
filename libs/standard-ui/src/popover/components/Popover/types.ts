import type {
    PopoverAPI as HeadlessPopoverAPI,
    PopoverProps as HeadlessPopoverProps,
    PopoverMixinAPI,
} from '@noodlestan/headless-ui';

export type PopoverProps = HeadlessPopoverProps;

export type PopoverAPI = Omit<HeadlessPopoverAPI, '$root'> & {
    $root: PopoverMixinAPI['$root'] & HeadlessPopoverAPI['$root'];
};
