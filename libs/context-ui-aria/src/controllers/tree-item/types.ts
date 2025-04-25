import type { AriaAttributes } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionElementProps } from '../region';

export type AriaTreeItemProps = AriaLabelledProps & {
    selected: boolean;
    expanded: boolean;
    level: number;
    setSize: number;
    posInSet: number;
};

export interface AriaTreeItemAPI {
    elProps: AriaRegionElementProps & {
        role: 'treeitem';
        'aria-expanded': AriaAttributes['aria-expanded'];
        'aria-selected': AriaAttributes['aria-selected'];
        'aria-level': AriaAttributes['aria-level'];
        'aria-setsize': AriaAttributes['aria-setsize'];
        'aria-posinset': AriaAttributes['aria-posinset'];
    };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
}
