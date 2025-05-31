import type {
    MenuItemGroupAPI as HeadlessMenuItemGroupAPI,
    MenuItemGroupProps as HeadlessMenuItemGroupProps,
} from '@no-comply/solid-composables';

import type { LabelProps, TextProps } from '../../../typography';
import type { MenuItemGroupMixinAPI, MenuItemGroupMixinProps } from '../../mixins';

export type MenuItemGroupProps = HeadlessMenuItemGroupProps & MenuItemGroupMixinProps;

export type MenuItemGroupAPI = Omit<
    HeadlessMenuItemGroupAPI,
    '$root' | '$label' | '$description'
> & {
    $root: HeadlessMenuItemGroupAPI['$root'] & MenuItemGroupMixinAPI['$root'];
    labelProps: HeadlessMenuItemGroupAPI['$label'] &
        MenuItemGroupMixinAPI['$label'] & {
            variant: LabelProps['variant'];
        };
    descriptionProps: HeadlessMenuItemGroupAPI['$description'] &
        MenuItemGroupMixinAPI['$description'] & {
            variant: TextProps['variant'];
        };
};
