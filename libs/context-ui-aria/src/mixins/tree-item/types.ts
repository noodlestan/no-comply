import type { AriaLabelElementProps, AriaLabelledProps } from '../../label';
import type { AriaAttributes } from '../../types';
import type { AriaRegionElementProps } from '../region';

export type AriaTreeItemProps = AriaLabelledProps & {
    selected: boolean;
    expanded: boolean;
    level: number;
    setSize: number;
    posInSet: number;
};

export type AriaTreeItemElementProps = AriaRegionElementProps & {
    role: 'treeitem';
    'aria-expanded': AriaAttributes['aria-expanded'];
    'aria-selected': AriaAttributes['aria-selected'];
    'aria-level': AriaAttributes['aria-level'];
    'aria-setsize': AriaAttributes['aria-setsize'];
    'aria-posinset': AriaAttributes['aria-posinset'];
};

export interface AriaTreeItemAPI {
    elProps: AriaTreeItemElementProps;
    labelProps: AriaLabelElementProps;
}
