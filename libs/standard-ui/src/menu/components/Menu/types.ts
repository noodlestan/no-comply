import type {
    MenuAPI as HeadlessMenuAPI,
    MenuProps as HeadlessMenuProps,
} from '@no-comply/solid-composables';

import type { SurfaceAPI } from '../../../surface';
import type { MenuMixinAPI, MenuMixinProps } from '../../mixins';

export type MenuProps = HeadlessMenuProps & MenuMixinProps;

export type MenuAPI = Omit<HeadlessMenuAPI, '$root' | 'context'> & {
    _surface: HeadlessMenuAPI['$root'] & SurfaceAPI['_surface'] & MenuMixinAPI['$root'];
};
