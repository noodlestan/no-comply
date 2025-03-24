import { ChevronDownIcon, ChevronRightIcon } from 'lucide-solid';
import type { Component } from 'solid-js';

import { ExpandButton } from '../../../../atoms';
import type { ClassList } from '../../../../dom';

type TreeListExpandButtonProps = {
    isExpanded: boolean;
    onClick: (ev: Event) => void;
    classList?: ClassList;
};

export const TreeListExpandButton: Component<TreeListExpandButtonProps> = props => {
    return (
        <ExpandButton
            size="xs"
            onClick={props.onClick}
            isExpanded={props.isExpanded}
            expanded={ChevronDownIcon}
            collapsed={ChevronRightIcon}
            classList={props.classList}
        />
    );
};
