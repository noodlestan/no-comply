import type { AriaAttributes } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';

export interface LinkMixinProps {
    onPress?: (ev: KeyboardEvent | MouseEvent) => void;
    href: string;
    label?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    disabled?: boolean;
    rel?: string;
}

export type LinkMixinElementProps = {
    href: string | undefined;
    target: string | undefined;
    rel: string | undefined;
    tabIndex: number | undefined;
    'aria-label': AriaAttributes['aria-label'];
    'aria-disabled': AriaAttributes['aria-disabled'];
    'data-disabled': '' | undefined;
    'data-external': '' | undefined;
    onClick: (ev: MouseEvent) => void;
    onKeyDown: (ev: KeyboardEvent) => void;
    classList: ClassList;
};

export interface LinkMixinAPI {
    elProps: LinkMixinElementProps;
}
