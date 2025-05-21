import type { PlacementProps } from '../../../placement';
import type { PopoverContext, PopoverContextOptions, PopoverContextValue } from '../../contexts';
import type { PopoverAPI } from '../Popover';

export type AnchoredPopoverTriggerProps = {
    id?: string;
    targetId: string;
    expanded: boolean;
    ref?: (el: HTMLElement) => void;
};

export type AnchoredPopoverTriggerAPI = {
    $root: {
        id: string;
        popoverTarget: string;
        popoverTargetAction: 'toggle';
        'aria-haspopup': 'true';
        'aria-expanded': boolean;
        ref?: (el: HTMLElement) => void;
    };
};

export type AnchoredPopoverProps = PopoverContextOptions & PlacementProps;

export type AnchoredPopoverAPI = {
    $root: PopoverAPI['$root'] & {
        component: 'div';
    };
    $trigger: AnchoredPopoverTriggerAPI['$root'];
    contentProps: {
        id: string;
        labelledby: string;
    };
    context: PopoverContext;
    contextValue: PopoverContextValue;
};
