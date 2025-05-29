import type { FirstLineAlignMixinAPI as HeadlessFirstLineAlignMixinAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { SizeScale } from '../../../types';

export type FirstLineAlignMixinProps = {
    height: SizeScale;
};

export type FirstLineAlignMixinAPI = {
    $root: HeadlessFirstLineAlignMixinAPI['$root'] & {
        classList: ClassList;
    };
};
