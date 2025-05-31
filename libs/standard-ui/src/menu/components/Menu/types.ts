import type {
    MenuAPI as HeadlessMenuAPI,
    MenuProps as HeadlessMenuProps,
} from '@no-comply/solid-composables';

import type { SurfaceAPI } from '../../../surface';
import type { MenuMixinAPI, MenuMixinProps } from '../../mixins';

export type MenuProps = HeadlessMenuProps & MenuMixinProps;

export type MenuAPI = Omit<HeadlessMenuAPI, '$root' | 'context'> & {
    surfaceProps: HeadlessMenuAPI['$root'] & SurfaceAPI['surfaceProps'] & MenuMixinAPI['$root'];
};
