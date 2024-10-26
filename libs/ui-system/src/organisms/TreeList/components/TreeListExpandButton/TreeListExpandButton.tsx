import { ChevronDownIcon, ChevronRightIcon } from 'lucide-solid';
import { Component } from 'solid-js';

import { ExpandButton } from '../../../../atoms';

type TreeListExpandButtonProps = {
    isExpanded: boolean;
    onClick: (ev: Event) => void;
    classList?: { [key: string]: boolean };
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
