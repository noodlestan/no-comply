import { type ParentComponent } from 'solid-js';

import { ResponsiveRuler, type ResponsiveRulerProps } from '../../../../../components';
import { DemoItem, type DemoItemProps } from '../DemoItem';

export type ResponsiveDemoItemProps = Omit<DemoItemProps, 'slot'> & {
    bps: string[];
};

export const ResponsiveDemoItem: ParentComponent<ResponsiveDemoItemProps> = props => {
    return (
        <DemoItem
            {...props}
            slot={() => (
                <ResponsiveRuler breakpoints={props.bps as ResponsiveRulerProps['breakpoints']} />
            )}
        />
    );
};
