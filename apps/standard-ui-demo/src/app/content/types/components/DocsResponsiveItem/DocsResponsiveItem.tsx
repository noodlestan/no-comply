import { type ParentComponent } from 'solid-js';

import { DocsItem, type DocsItemProps, ResponsiveRuler, type ResponsiveRulerProps } from '../../..';

export type DocsResponsiveItemProps = Omit<DocsItemProps, 'slot'> & {
    bps: string[];
};

export const DocsResponsiveItem: ParentComponent<DocsResponsiveItemProps> = props => {
    return (
        <DocsItem
            {...props}
            slot={() => (
                <ResponsiveRuler breakpoints={props.bps as ResponsiveRulerProps['breakpoints']} />
            )}
        />
    );
};
