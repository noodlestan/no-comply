import type { AriaAttributes } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaGroupProps = AriaLabelledProps & {
    expanded?: boolean;
    setSize?: number;
};

export interface AriaGroupAPI {
    $root: AriaRegionAPI<'group'>['$root'] & {
        'aria-expanded': AriaAttributes['aria-expanded'];
        'aria-setsize': AriaAttributes['aria-setsize'];
    };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
}
