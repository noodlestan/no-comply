import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FirstLineAlignMixinAPI as HeadlessFirstLineAlignMixinAPI } from '@noodlestan/headless-ui';

import type { SizeScale } from '../../../types';

export type FirstLineAlignMixinProps = {
    height: SizeScale;
};

export type FirstLineAlignMixinAPI = {
    $root: HeadlessFirstLineAlignMixinAPI['$root'] & {
        classList: ClassList;
    };
};
