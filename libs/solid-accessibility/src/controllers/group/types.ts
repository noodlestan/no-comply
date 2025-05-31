import type { Accessor } from 'solid-js';

import type { AriaAttributes } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaGroupProps = AriaLabelledProps & {
    expanded?: boolean;
    setSize?: number;
};

export interface AriaGroupAPI {
    $root: Omit<AriaRegionAPI['$root'], 'role'> & {
        role: 'group' | undefined;
        'aria-expanded': AriaAttributes['aria-expanded'];
        'aria-setsize': AriaAttributes['aria-setsize'];
    };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
    hasLabel: Accessor<boolean>;
}
