import type { DisplayLevel } from '@no-comply/standard-ui';
import { type Component, children } from 'solid-js';

import type { DemoSectionData } from '../../types';
import { DemoSection } from '../DemoSection';
import { RenderDemoItem } from '../RenderDemoItem';

export type RenderDemoSectionProps = {
    section: DemoSectionData;
    level: DisplayLevel;
};

export const RenderDemoSection: Component<RenderDemoSectionProps> = props => {
    const sectionProps = () => ({
        ...props.section.props,
        title: props.section.title,
    });

    const c = children(() => {
        return props.section.items.map(item => {
            if (item.type === 'item') {
                return <RenderDemoItem item={item} level={(props.level + 1) as DisplayLevel} />;
            } else {
                return (
                    <RenderDemoSection section={item} level={(props.level + 1) as DisplayLevel} />
                );
            }
        });
    });

    return <DemoSection {...sectionProps()}>{c()}</DemoSection>;
};
