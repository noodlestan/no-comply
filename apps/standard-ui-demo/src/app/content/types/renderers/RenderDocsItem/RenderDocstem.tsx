import type { DisplayLevel } from '@no-comply/standard-ui';
import { type Component, children } from 'solid-js';

import { DocsItem } from '../../components';
import type { DocsItemData } from '../../types';

export type RenderDocsItemProps = {
    item: DocsItemData;
    level: DisplayLevel;
};

export const RenderDocsItem: Component<RenderDocsItemProps> = props => {
    const sectionProps = () => ({
        ...props.item.props,
        title: props.item.title,
    });

    const c = children(() => {
        return props.item.content();
    });

    return <DocsItem {...sectionProps()}>{c()}</DocsItem>;
};
