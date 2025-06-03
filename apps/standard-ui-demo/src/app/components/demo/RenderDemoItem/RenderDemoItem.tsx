import type { DisplayLevel } from '@no-comply/standard-ui';
import { type Component, children } from 'solid-js';

import { DemoItem } from '../DemoItem';
import type { DemoItemData } from '../types';

export type RenderDemoItemProps = {
    item: DemoItemData;
    level: DisplayLevel;
};

export const RenderDemoItem: Component<RenderDemoItemProps> = props => {
    const sectionProps = () => ({
        ...props.item.props,
        title: props.item.title,
    });

    const c = children(() => {
        return props.item.content();
    });

    return <DemoItem {...sectionProps()}>{c()}</DemoItem>;
};
